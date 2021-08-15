import { useState, useEffect } from 'react';
import './MyBookshelf.css';
import SearchBar from './SearchBar';
import SummaryBar from './SummaryBar';
import AddBookForm from './AddBookForm';

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

  const [ groups, setGroups ] = useState([])
  const [ tags, setTags ] = useState([]);
  const [ statuses, setStatuses ] = useState([]);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/statuses', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(statuses => setStatuses(statuses));
      return () => {
        myAbortController.abort();
      };
  }, []);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/tags', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(tags => setTags(tags));
      return () => {
        myAbortController.abort();
      };
  }, []);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/groups', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(promisedObjects => {
        setGroups(promisedObjects);
      });
      return () => {
        myAbortController.abort();
      };
  }, []);

  function handleAddBookClick() {
    setIsAddBook(isAddBook => !isAddBook);
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
            setBooks={setBooks}
            groups={groups} 
            setGroups={setGroups}
            statuses={statuses}
            setStatuses={setStatuses}
            />
        : <SummaryBar books={books} setBooks={setBooks} 
            groups={groups} tags={tags} statuses={statuses} />
      }         
    </div>
  );
}

export default MyBookshelf;
