import BookToolbar from './BookToolbar';

function DisplayBook({ book, editBook, books, setBooks, addNotes }) {
  return (
    <div className="book">
      <BookToolbar book={book} editBook={editBook}
        books={books} setBooks={setBooks} addNotes={addNotes} />
    </div>
  )
}

export default DisplayBook;
