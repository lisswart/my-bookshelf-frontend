import { useState } from 'react';

function TagForm({ book, setIsAddTag, isAddTag }) {

  const [ formState, setFormState ] = useState({
    tags: book.tags
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
    // const tags = {
    //   tags: formState.tags
    // }
    // editTags(tags);
    setIsAddTag(!isAddTag);
  }

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Tags: </label>
        <input onChange={handleEntryChange} 
          name="tags" value={formState.tags} />
      </form>
    </div>
  )
}

export default TagForm
