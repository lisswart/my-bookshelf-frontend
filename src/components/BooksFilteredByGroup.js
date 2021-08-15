import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByGroup({ books, setBooks, tags }) {
  return (
    <div>
      <DisplayBooksPanel books={books} 
      setBooks={setBooks}btags={tags} />
    </div>
  );
}

export default BooksFilteredByGroup;
