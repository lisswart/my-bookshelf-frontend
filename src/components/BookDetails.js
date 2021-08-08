import BookDescription from './BookDescription';
import BookTags from './BookTags';

function BookDetails({ book }) {

  

  return (
    <div className="book-details">
      <div className="title"><em><strong>{book.book_title}</strong></em></div>
      <div className="author"><strong>{book.book_author}</strong></div>
      <BookDescription book={book} />
      <BookTags book={book} />
    </div>
  )
}

export default BookDetails;
