import { NavLink } from 'react-router-dom';

function Tag({ tag, setBooks }) {

  const { id, tag_name } = tag;

  function handleTagClick() {
    fetch(`http://localhost:9393/tags/${id}`)
      .then(r => r.json())
      .then(booksByTag => {
        console.log(booksByTag);
        setBooks(booksByTag.books);
      });
  }

  return (
    <div>
      <NavLink to={`/tags/${id}`} onClick={handleTagClick}>
        {tag_name}
      </NavLink>
    </div>
  );
}

export default Tag;
