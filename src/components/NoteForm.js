import { useState, useEffect } from 'react';

function NoteForm({ book, isAddNote, setIsAddNote }) {

  const [ formState, setFormState ] = useState({
    book_title: book.book_title,
    book_author: book.book_author,
    book_description: book.book_description,
    book_group: book.book_group,
    is_notes_added: book.is_notes_added,
    notes: book.notes
  });

  function addNotes(notes) {
    fetch(`http://localhost:9393/books/${book.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notes)
    })
      .then(r => r.json())
      .then(book => {
        
      });
  }

  useEffect(() => {
    fetch(`http://localhost:9393/books/${book.id}`)
      .then(r => r.json())
      .then(book => {
        console.log(book);
        // setBook(book);
      }) 
    // return () => {
    //   cleanup
    // }
  }, [book])

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
    if(formState.notes) {
      const notes = { 
        book_title: book.book_title,
        book_author: book.book_author,
        book_description: book.book_description,
        book_group: book.book_group,
        is_notes_added: true,
        notes: formState.notes };
      addNotes(notes);
      setIsAddNote(!isAddNote);
    } else {
      const notes = { 
        book_title: book.book_title,
        book_author: book.book_author,
        book_description: book.book_description,
        book_group: book.book_group,
        is_notes_added: false,
        notes: formState.notes };
      addNotes(notes);
      setIsAddNote(!isAddNote);
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
  )
}

export default NoteForm
