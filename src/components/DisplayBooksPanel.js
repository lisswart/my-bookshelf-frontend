import DisplayBook from "./DisplayBook";

function DisplayBooksPanel({ books }) {
  return (
    <div className="books">
      {books.map(book => <DisplayBook key={book.id} book={book} />)}
    </div>
  )
}

export default DisplayBooksPanel;