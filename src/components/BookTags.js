// import { useEffect, useState } from 'react';

function BookTags({ tags }) {
  // const baseURL = 'http://localhost:9393/';

  // const [ tags, setTags ] = useState([])

  // useEffect(() => {
  //   fetch(`${baseURL}booktags/${book.id}`)
  //     .then(r => r.json())
  //     .then(book => {
  //       // console.log(book);
  //       const bookTags = book.tags.map(tag => tag.tag_name);
  //       setTags(bookTags);
  //     });
  //     // need to add a cleanup function
  // }, [book.id]);

  return (
    <div className="booktags">
      {
        tags.map((tag, i) => <button key={i} className="tag selected"><strong>{tag}</strong></button>)
      }
    </div>
  )
}

export default BookTags
