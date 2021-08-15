import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByStatus({ books, setBooks, tags }) {
  return (    
    <DisplayBooksPanel books={books}
      setBooks={setBooks} tags={tags} />
  );
}

export default BooksFilteredByStatus;
