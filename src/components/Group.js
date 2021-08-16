import { NavLink } from 'react-router-dom';

function Group({ group, setBooks, books }) {

  const { id, group_name } = group;

  function handleGroupClick() {
    fetch(`http://localhost:9393/groups/${id}`)
      .then(r => r.json())
      .then(booksByGroup => {
        setBooks(booksByGroup.books);
      });
  }

  function extractNumberOfBooks() {
    const length = books.filter(book => book.group_id === id);
    return length.length;
  }

  return (
    <div  className="taglist">
      {
        <NavLink to={`/groups/${id}`} onClick={handleGroupClick}>
          {group_name}: {extractNumberOfBooks()}
        </NavLink>
      }
    </div>
  );
}

export default Group;
