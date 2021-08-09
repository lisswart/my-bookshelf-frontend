import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SummaryBar from './components/SummaryBar';
import DisplayBooksPanel from './components/DisplayBooksPanel';
import AddBookForm from './components/AddBookForm';

function App() {
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
          style={ {backgroundColor: "lavenderblush", 
          border: "none", borderRadius: "5px"} }>
            ➕
        </button>
      </div>
      {
        isAddBook
        ? <AddBookForm isAddBook={isAddBook} 
            setIsAddBook={setIsAddBook}
            books={books}
            setBooks={setBooks} />
        : <>
            <SummaryBar books={books} />
            <DisplayBooksPanel books={books} 
              setBooks={setBooks} />
          </>
      }
      
    </div>
  );
}

export default App;
