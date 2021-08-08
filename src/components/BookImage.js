import { useEffect, useState } from 'react';

function BookImage({ book }) {

  const baseURL = 'http://localhost:9393/';

  const [ status, setStatus ] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}bookstatus/${book.id}`)
      .then(r => r.json())
      .then(book => {
        console.log(book);
        const readStatus = book.read_status;
        setStatus(readStatus);
      });
  }, [book.id]);

  return (
    <div className="book-image">
      <div className="image"></div>
      <p className="status">Status: {status}</p>
    </div>
  )
}

export default BookImage
