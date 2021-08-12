import { useState, useEffect } from 'react';
import './MyBookshelf.css';
import SearchBar from './SearchBar';
import SummaryBar from './SummaryBar';
import AddBookForm from './AddBookForm';
import { Switch, Route } from 'react-router-dom';
import AllBooks from './AllBooks';
import BooksFilteredByStatus from './BooksFilteredByStatus';
import BooksFilteredByTags from './BooksFilteredByTags.js';
import BooksFilteredByGroup from './BooksFilteredByGroup';

function MyBookshelf() {
  const baseURL = 'http://localhost:9393/';

  const [ books, setBooks ] = useState([]);
  const [ isAddBook, setIsAddBook ] = useState(false);

  useEffect(() => {
    fetch(`${baseURL}books`)
      .then(r => r.json())
      .then(books => {
        setBooks(books);
      });
  }, []);

  function handleAddBookClick() {
    setIsAddBook(!isAddBook);
  }

  return (
    <div className="App">
      <SearchBar books={books} />
      <div className="h2-add-book-wrapper">
        <h2>My Bookshelf</h2>
        <button onClick={handleAddBookClick}
          className="group"
          style={ {backgroundColor: "lavenderblush", 
          border: "none", borderRadius: "5px", 
          height: "3rem"} }>
            Add
        </button>
      </div>
      {
        isAddBook
        ? <AddBookForm isAddBook={isAddBook} 
            setIsAddBook={setIsAddBook}
            books={books}
            setBooks={setBooks} />
        : <SummaryBar books={books} setBooks={setBooks} />
      }
      <Switch>
        <Route exact path="/books">
          <AllBooks books={books} setBooks={setBooks} />
        </Route>
        <Route path="/groups/:id">
          <BooksFilteredByGroup books={books} setBooks={setBooks} />
        </Route>
        <Route path="tags/:id">
          <BooksFilteredByTags books={books} setBooks={setBooks} />
        </Route>
        <Route path="statuses/:id">
          <BooksFilteredByStatus books={books} setBooks={setBooks} />
        </Route>
      </Switch>      
    </div>
  );
}

export default MyBookshelf;
