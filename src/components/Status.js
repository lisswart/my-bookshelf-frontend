import { NavLink } from 'react-router-dom';

function Status({ status, setBooks, books }) {

  const { id, read_status } = status;

  function handleStatusClick() {
    fetch(`http://localhost:9393/statuses/${id}`)
      .then(r => r.json())
      .then(booksByStatus => {
        setBooks(booksByStatus.books);
      });
  }

  function extractNumberOfBooks() {
    const length = books.filter(book => book.status_id === id);
    return length.length;
  }

  return (
    <div className="taglist">
      <NavLink to={`/statuses/${id}`} onClick={handleStatusClick}>
        {read_status}: {extractNumberOfBooks()}
      </NavLink>
    </div>
  );
}

export default Status;
