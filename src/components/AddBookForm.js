import { useState } from 'react';

function AddBookForm({ isAddBook, setIsAddBook, books, setBooks, groupHash, setGroupHash }) {

  const [ formState, setFormState ] = useState({
    book_title: "",
    book_author: "",
    book_description: "",
    group_label: "",
    read_status: ""
  });
  
  const [ selectedStatus, setSelectedStatus ] = useState(null);
  const [ assignToGroup, setAssignToGroup ] = useState(null);

  function addBook(book) {
    fetch('http://localhost:9393/add-book', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })
      .then(r => r.json())
      .then(addedBook => {
        const updatedBooks = [ ...books, addedBook];
        setBooks(updatedBooks);
      });
  }  

  function handleEntryChange(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    setFormState({
      ...formState,
      [fieldName]: userInput
    });
  }

  function handleSelectStatusClick(event) {
    if(event.target.value === "Not Begun")
      setSelectedStatus(1);
    else if(event.target.value === "In Progress")
      setSelectedStatus(2);
    else if(event.target.value === "Completed")
      setSelectedStatus(3);
    else if(event.target.value === "Abandoned")
      setSelectedStatus(4);
    else
      setSelectedStatus(5);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for(const key in groupHash) {
      console.log(formState.group_label);
      console.log(`groupHash.${key}= ${groupHash[key]}`);
      if(formState.group_label.includes(key)) {        
        console.log(parseInt(groupHash[key]));
        let num = parseInt(groupHash[key]);
        console.log(num);
        setAssignToGroup(num); // herein lies the problem
        console.log(assignToGroup); // logs null
        const addingBook = {
          book_title: formState.book_title,
          book_author: formState.book_author,
          book_description: formState.book_description,
          status_id: selectedStatus,
          group_id: 3
        };
        addBook(addingBook);
        setIsAddBook(!isAddBook);
        setFormState({
          book_title: "",
          book_author: "",
          book_description: "",
          read_status: "",
          group_label: ""
        });
      } 
      // else {
      //   addGroup(formState.group_label);
      // }
    }   
  }

  // function addGroup(group) {
  //   fetch(`http://localhost:9393/groups`, {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(group)
  //   })
  //     .then(r => r.json())
  //     .then(newGroup => {
  //       console.log(newGroup);
  //     });
  // }

  return (
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
          name="group_label" value={formState.group_label} />

        <label>Read Status: </label>
        <select onChange={handleSelectStatusClick}>
          <option value="Not Begun">Not Begun</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Abandoned">Abandoned</option>
          <option value="None">None</option>
        </select>

        <input type="submit" value="Add" />
      </form>
  );
}

export default AddBookForm;
