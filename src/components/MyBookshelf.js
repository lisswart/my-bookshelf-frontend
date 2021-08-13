import { useState, useEffect } from 'react';
import './MyBookshelf.css';
import SearchBar from './SearchBar';
import SummaryBar from './SummaryBar';
import AddBookForm from './AddBookForm';


function MyBookshelf() {
  const baseURL = 'http://localhost:9393/';

  const [ books, setBooks ] = useState([]);
  const [ isAddBook, setIsAddBook ] = useState(false);
  const [ groupHash, setGroupHash ] = useState({});

  useEffect(() => {
    fetch(`${baseURL}books`)
      .then(r => r.json())
      .then(books => {
        setBooks(books);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9393/groups')
      .then(r => r.json())
      .then(groupObjects => {
        console.log("groupObjects", groupObjects);
        groupObjects.forEach(groupObject => {
          groupHash[groupObject.group_name] = groupObject.id;
        });        
        setGroupHash(groupHash);
        console.log("groupHash", groupHash);
      });      
  }, [groupHash]);

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
            setBooks={setBooks}
            groupHash={groupHash}
            setGroupHash={setGroupHash} />
        : <SummaryBar books={books} setBooks={setBooks} />
      }         
    </div>
  );
}

export default MyBookshelf;
