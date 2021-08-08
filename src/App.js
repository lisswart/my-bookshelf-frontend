import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SummaryBar from './components/SummaryBar';
import DisplayBooksPanel from './components/DisplayBooksPanel';

function App() {
  const baseURL = 'http://localhost:9393/';

  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}books`)
      .then(r => r.json())
      .then(books => {
        console.log(books);
        setBooks(books);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <h2>My Bookshelf</h2>
      <SummaryBar books={books} />
      <DisplayBooksPanel books={books} />
    </div>
  );
}

export default App;
