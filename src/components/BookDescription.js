
function BookDescription({ book }) {

  const description = book.book_description;
  const lines = description.split('\n');

  return (
    <div>
      {
        lines.map((line, i) => 
        <p key={i} className="description">{line}</p>)
      }
    </div>
    // <p className="description">
    //   {book.book_description}
    // </p>
  );
}

export default BookDescription;
