import { NavLink } from 'react-router-dom';

function Status({ status, setBooks }) {

  const { id, read_status } = status;

  function handleStatusClick() {
    fetch(`http://localhost:9393/statuses/${id}`)
      .then(r => r.json())
      .then(booksByStatus => {
        console.log(booksByStatus);
        setBooks(booksByStatus.books);
      });
  }

  return (
    <div className="taglist">
      <NavLink to={`/statuses/${id}`} onClick={handleStatusClick}>
        {read_status}
      </NavLink>
    </div>
  );
}

export default Status;
