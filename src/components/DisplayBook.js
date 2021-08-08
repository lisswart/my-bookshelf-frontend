import BookImage from './BookImage';
import BookDetails from './BookDetails';
import BookToolbar from './BookToolbar';

function DisplayBook({ book }) {
  return (
    <div className="book">
      <BookImage book={book} />
      <BookDetails book={book} />
      <BookToolbar book={book} />
    </div>
  )
}

export default DisplayBook;
