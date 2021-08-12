import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByTags({ books, setBooks }) {
  return (
    <div>
      <DisplayBooksPanel books={books} setBooks={setBooks} />
    </div>
  );
}

export default BooksFilteredByTags;
