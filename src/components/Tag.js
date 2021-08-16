import { NavLink } from 'react-router-dom';

function Tag({ tag, setBooks, books }) {

  const { id, tag_name } = tag;

  function handleTagClick() {
    fetch(`http://localhost:9393/tags/${id}`)
      .then(r => r.json())
      .then(booksByTag => {
        setBooks(booksByTag.books);
      });
  }

  function extractNumberOfBooks() {
    const length = books.filter(book => book.id === id);
    return length.length;
  }

  return (
    <div className="taglist">
      <NavLink to={`/tags/${id}`} onClick={handleTagClick}>
        {tag_name}: {extractNumberOfBooks()}
      </NavLink>
    </div>
  );
}

export default Tag;
