
import BookToolbar from './BookToolbar';

function DisplayBook({ book, editBook, books, setBooks }) {
  return (
    <div className="book">
      <BookToolbar book={book} editBook={editBook}
        books={books} setBooks={setBooks} />
    </div>
  )
}

export default DisplayBook;
