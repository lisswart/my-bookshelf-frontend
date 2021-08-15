import BookToolbar from './BookToolbar';

function DisplayBook({ book, editBook, books, 
  setBooks, addNotes, tags }) {
  return (
    <div className="book">
      <BookToolbar book={book} editBook={editBook}
        books={books} setBooks={setBooks} 
        tags={tags} addNotes={addNotes} />
    </div>
  )
}

export default DisplayBook;
