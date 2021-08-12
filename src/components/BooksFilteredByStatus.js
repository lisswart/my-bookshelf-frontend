import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByStatus({ books, setBooks }) {
  return (    
    <DisplayBooksPanel books={books}
      setBooks={setBooks} />
  );
}

export default BooksFilteredByStatus;
