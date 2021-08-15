import DisplayBooksPanel from './DisplayBooksPanel';

function BooksFilteredByTags({ books, setBooks, tags }) {
  return (
    <div>
      <DisplayBooksPanel books={books} 
      setBooks={setBooks}tags={tags} />
    </div>
  );
}

export default BooksFilteredByTags;
