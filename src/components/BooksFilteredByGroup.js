import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByGroup({ books, setBooks }) {
  return (
    <div>
      <DisplayBooksPanel books={books} setBooks={setBooks} />
    </div>
  );
}

export default BooksFilteredByGroup;
