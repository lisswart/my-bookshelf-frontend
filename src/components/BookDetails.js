import BookDescription from './BookDescription';
import BookTags from './BookTags';
import EditForm from './EditForm';
import NoteForm from './NoteForm';
import TagForm from './TagForm';
import GroupForm from './GroupForm';
import NotePage from './NotePage';
import { useState } from 'react';

function BookDetails({ book, isOnEditMode, editBook,
  isAddNote, setIsAddNote, isAddTag, setIsAddTag, 
  isAddGroup, setIsOnEditMode, addNotes }) {

  const [ isNotePage, setIsNotePage ] = useState(book.is_notes_added);

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
                ? <TagForm book={book} 
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
              <BookTags book={book} />
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
