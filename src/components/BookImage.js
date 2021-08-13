import { useEffect, useState } from 'react';

function BookImage({ book }) {

  const baseURL = 'http://localhost:9393/';

  const [ status, setStatus ] = useState([]);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch(`${baseURL}bookstatus/${book.id}`,
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(book => {
        const readStatus = book.read_status;
        setStatus(readStatus);
      });
      return () => {
        myAbortController.abort();
      };
  }, [book.id]);

  return (
    <div className="book-image">
      <div className="image"></div>
      <p className="status">Status: {status}</p>
    </div>
  );
}

export default BookImage;
