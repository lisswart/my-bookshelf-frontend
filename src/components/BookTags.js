// import { useEffect, useState } from 'react';

function BookTags({ booktags }) {
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
        booktags.map((booktag, i) => <button key={i}><strong>{booktag}</strong></button>)
      }
    </div>
  )
}

export default BookTags
