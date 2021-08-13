import { useEffect, useState } from 'react';

function BookImage({ book }) {

  const baseURL = 'http://localhost:9393/';

  const [ status, setStatus ] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}bookstatus/${book.id}`)
      .then(r => r.json())
      .then(book => {
        const readStatus = book.read_status;
        setStatus(readStatus);
      });
      // need to add a cleanup function
  }, [book.id]);
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //   at BookDetails (http://localhost:3000/static/js/main.chunk.js:741:3)
  //   at div
  //   at BookToolbar (http://localhost:3000/static/js/main.chunk.js:1270:3)
  //   at div
  //   at DisplayBook (http://localhost:3000/static/js/main.chunk.js:1842:3)

  return (
    <div className="book-image">
      <div className="image"></div>
      <p className="status">Status: {status}</p>
    </div>
  )
}

export default BookImage
