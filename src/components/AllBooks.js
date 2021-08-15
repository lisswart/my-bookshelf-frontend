import DisplayBooksPanel from './DisplayBooksPanel';

function AllBooks({ books, setBooks, tags }) {
  return (
    <div>
      <DisplayBooksPanel books={books} 
        setBooks={setBooks} tags={tags} />
    </div>
  );
}

export default AllBooks;
