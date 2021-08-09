
import BookToolbar from './BookToolbar';

function DisplayBook({ book, editBook }) {
  return (
    <div className="book">
      <BookToolbar book={book} editBook={editBook}/>
    </div>
  )
}

export default DisplayBook;
