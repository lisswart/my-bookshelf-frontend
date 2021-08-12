import { NavLink } from 'react-router-dom';

function Group({ group, setBooks }) {

  const { id, group_name } = group;

  function handleGroupClick() {
    fetch(`http://localhost:9393/groups/${id}`)
      .then(r => r.json())
      .then(booksByGroup => {
        console.log(booksByGroup);
        setBooks(booksByGroup.books);
      });
  }

  return (
    <div>
      <NavLink to={`/groups/${id}`} onClick={handleGroupClick}>
        {group_name}
      </NavLink>
    </div>
  );
}

export default Group;
