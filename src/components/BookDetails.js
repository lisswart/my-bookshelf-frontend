import BookDescription from './BookDescription';
import BookTags from './BookTags';
import EditForm from './EditForm';
import NoteForm from './NoteForm';
import TagForm from './TagForm';
import GroupForm from './GroupForm';
import NotePage from './NotePage';
import { useEffect, useState } from 'react';

function BookDetails({ book, isOnEditMode, editBook,
  isAddNote, setIsAddNote, isAddTag, setIsAddTag, 
  isAddGroup, setIsOnEditMode }) {

    const baseURL = 'http://localhost:9393/';

    const [ tags, setTags ] = useState([]);

    useEffect(() => {
      fetch(`${baseURL}booktags/${book.id}`)
        .then(r => r.json())
        .then(book => {          
          const bookTags = book.tags.map(tag => tag.tag_name);
          setTags(bookTags);
        });
        // need to add a cleanup function
    }, [book.id]);

    // function editTags()
    
  return (
    <div className="book-details">
      <div className="title"><em><strong>{book.book_title}</strong></em></div>
      <div className="author"><strong>{book.book_author}</strong></div>
      <div>
        {
          isOnEditMode
          ? <EditForm 
              book={book} editBook={editBook}
              setIsOnEditMode={setIsOnEditMode} />
          : <div>
              {
                isAddNote
                ? <NoteForm book={book} 
                    isAddNote={isAddNote} 
                    setIsAddNote={setIsAddNote} />
                : <></>
              }
              {
                isAddTag
                ? <TagForm tags={tags} 
                    setIsAddTag={setIsAddTag} />
                : <></>
              }
              {
                isAddGroup
                ? <GroupForm book={book} />
                : <></>       
              }          
            </div>
        }
          <div className="desc-tags-wrapper">
              <BookDescription book={book} />
              <BookTags tags={tags} />
          </div> 
          {
            book.is_notes_added
            ? <NotePage book={book} />
            : <></>               
          }   
      </div>
    </div>
  )
}

export default BookDetails;
