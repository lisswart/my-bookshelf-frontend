import { useState } from 'react';

function AddBookForm({ isAddBook, setIsAddBook, books, setBooks }) {

  const [ formState, setFormState ] = useState({
    book_title: "",
    book_author: "",
    book_description: "",
    book_group: ""
  });

  function addBook(book) {
    fetch('http://localhost:9393/add-book', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })
      .then(r => r.json())
      .then(addedBook => {
        console.log(addedBook);
        const updatedBooks = [ ...books, addedBook];
        setBooks(updatedBooks);
      });
  }

  function handleEntryChange(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    console.log(fieldName, userInput);
    setFormState({
      ...formState,
      [fieldName]: userInput
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const addingBook = {
      book_title: formState.book_title,
      book_author: formState.book_author,
      book_description: formState.book_description
    };
    addBook(addingBook);
    setIsAddBook(!isAddBook);
    setFormState({
      book_title: "",
      book_author: "",
      book_description: ""
    });
  }

  return (
    <div>
      <form className="add-book-form" onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" onChange={handleEntryChange}     
          name="book_title" value={formState.book_title} />

        <label>Author(s)</label>
        <input type="text" onChange={handleEntryChange} name="book_author" value={formState.book_author} />

        <label>Description: </label>
        <textarea onChange={handleEntryChange}
          name="book_description" 
          value={formState.book_description} />

        <label>Group: </label>
        <input type="text" onChange={handleEntryChange}
          name="book_group" value={formState.book_group} />

        <div className="add-book-form-buttons-wrapper">
          <input type="submit" value="Add" />
          <button>cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm;
