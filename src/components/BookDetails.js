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
  isAddGroup, setIsOnEditMode, addNotes }) {

  const baseURL = 'http://localhost:9393/';
  const [ isNotePage, setIsNotePage ] = useState(book.is_notes_added);

    const [ booktags, setBooktags ] = useState([]);

    useEffect(() => {
      fetch(`${baseURL}booktags/${book.id}`)
        .then(r => r.json())
        .then(book => {          
          const bookTags = book.tags.map(tag => tag.tag_name);
          setBooktags(bookTags);
        });
        // need to add a cleanup function
    }, [book.id]);
    
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
                    setIsAddNote={setIsAddNote}
                    addNotes={addNotes}
                    setIsNotePage={setIsNotePage} />
                : <></>
              }
              {
                isAddTag
                ? <TagForm booktags={booktags} 
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
              <BookTags booktags={booktags} />
          </div> 
          {
            isNotePage
            ? <NotePage book={book} />
            : <></>               
          }   
      </div>
    </div>
  )
}

export default BookDetails;
