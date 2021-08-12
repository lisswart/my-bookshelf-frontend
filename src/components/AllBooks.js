import DisplayBooksPanel from './DisplayBooksPanel';

function AllBooks({ books, setBooks }) {
  return (
    <div>
      <DisplayBooksPanel books={books} setBooks={setBooks} />
    </div>
  );
}

export default AllBooks;
