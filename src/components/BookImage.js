import { useEffect, useState } from 'react';

function BookImage({ book }) {

  const baseURL = 'http://localhost:9393/';

  const [ status, setStatus ] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}bookstatus/${book.id}`)
      .then(r => r.json())
      .then(book => {
        // console.log(book);
        const readStatus = book.read_status;
        setStatus(readStatus);
      });
  }, [book.id]);

  return (
    <div className="book-image">
      <div className="image"></div>
      {/* <div className="wrapper">
        <input type="checkbox" name="rating" id="1star"id="" value="st1" />
        <label for="st1"></label>
        <input type="checkbox" name="rating" id="1star"id="" value="st2" />
        <label for="st2"></label>
        <input type="checkbox" name="rating" id="1star"id="" value="st3" />
        <label for="st3"></label>
        <input type="checkbox" name="rating" id="1star"id="" value="st4" />
        <label for="st4"></label>
        <input type="checkbox" name="rating" id="1star"id="" value="st5" />
        <label for="st5"></label>
      </div> */}
      <p className="status">Status: {status}</p>
    </div>
  )
}

export default BookImage
