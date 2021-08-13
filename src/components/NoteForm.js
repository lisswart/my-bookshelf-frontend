import { useState } from 'react';

function NoteForm({ book, isAddNote, setIsAddNote, addNotes, setIsNotePage }) {

  const [ formState, setFormState ] = useState({
    book_title: book.book_title,
    book_author: book.book_author,
    book_description: book.book_description,
    is_notes_added: book.is_notes_added,
    notes: book.notes
  });

  function handleEntryChange(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    setFormState({
      ...formState,
      [fieldName]: userInput
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    if(formState.notes !== "") {
      const notes = { 
        book_title: book.book_title,
        book_author: book.book_author,
        book_description: book.book_description,
        is_notes_added: true,
        notes: formState.notes
      };
      addNotes(book.id, notes);
      setIsAddNote(!isAddNote);
      setIsNotePage(notes.is_notes_added);
    } else if (formState.notes === "") {
      const notes = { 
        book_title: book.book_title,
        book_author: book.book_author,
        book_description: book.book_description,
        is_notes_added: false,
        notes: formState.notes
      };
      addNotes(book.id, notes);
      setIsAddNote(!isAddNote);
      setIsNotePage(notes.is_notes_added);
    }
  }

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Notes: </label>
        <textarea onChange={handleEntryChange} 
          name="notes" value={formState.notes}>{book.notes}</textarea>
        <input type="submit" value="Add Notes" />
      </form>
    </div>
  );
}

export default NoteForm;
