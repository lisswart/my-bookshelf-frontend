import { useState } from 'react';

function EditForm({ book, setIsOnEditMode, editBook }) {

  const [ formState, setFormState ] = useState({
    book_title: book.book_title,
    book_author: book.book_author,
    book_description: book.book_description,
    book_group: book.book_group,
    notes: book.notes
  });

  function handleEntryChange(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    console.log(fieldName);
    console.log(userInput);
    setFormState({
      ...formState,
      [fieldName]: userInput
    });
  }

  function handleCancelClick() {
    setIsOnEditMode(!setIsOnEditMode);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const bookEdits = {
      book_title: formState.book_title,
      book_author: formState.book_author,
      book_description: formState.book_description,
      book_group: formState.book_group
    };
    editBook(book.id, bookEdits);
    setIsOnEditMode(false);
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="edit-form">

        <label>Title:</label>
        <input type="text" onChange={handleEntryChange}
          name="book_title"
          value={formState.book_title} />

        <label>Author:</label>
        <input type="text" onChange={handleEntryChange}
          name="book_author"
          value={formState.book_author} />

        <label>Description:</label>
        <textarea onChange={handleEntryChange}
          name="book_description"
          value={formState.book_description} />

        <label>Group: </label>
        <input type="text" onChange={handleEntryChange} 
          name="book_group" 
          value={formState.book_group}/>

        <div className="form-buttons">
          <input type="submit" />
          <button onClick={handleCancelClick}>
            Cancel
          </button>
        </div>

      </form>
      
    </div>
  );
}

export default EditForm;
