import { useState } from 'react';
import BookImage from './BookImage';
import BookDetails from './BookDetails';

function BookToolbar({ book, editBook }) {

  const [ isOnEditMode, setIsOnEditMode ] = useState(false);
  const [ isAddNote, setIsAddNote ] = useState(false);
  const [ isAddTag, setIsAddTag ] = useState(false);
  const [ isAddGroup, setIsAddGroup ] = useState(false);


  function handleEditClick() {
    setIsOnEditMode(!isOnEditMode);
  }

  function handleAddNoteClick() {
    setIsAddNote(!isAddNote);
  }

  function handleAddTagClick() {
    setIsAddTag(!isAddTag);
  }

  function handleAddGroupClick() {
    setIsAddGroup(!isAddGroup);
  }

  function handleDeleteBookClick() {

  }

  return (
    <div className="book-wrapper">
      <div className="toolbar">
        <button className="pencil"
          onClick={handleEditClick}></button>        
        <button className="page"
          onClick={handleAddNoteClick}></button>
        <button className="tag"
          onClick={handleAddTagClick}></button>
        <button className="group"
        onClick={handleAddGroupClick}></button>
        <button className="wastebasket" 
          onClick={handleDeleteBookClick}></button>
      </div>

      <BookDetails book={book} 
        isOnEditMode={isOnEditMode}
        setIsOnEditMode={setIsOnEditMode}
        editBook={editBook}
        isAddNote={isAddNote}
        isAddTag={isAddTag}
        isAddGroup={isAddGroup} />
      <BookImage book={book} />
    </div>
  );
}

export default BookToolbar;