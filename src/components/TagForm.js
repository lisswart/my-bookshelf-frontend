import { useState } from 'react';

function TagForm({ tags, setIsAddTag, isAddTag }) {

  const baseURL = 'http://localhost:9393/';

  const [ formState, setFormState ] = useState({
    tags: tags
  });

  function addTags(tags) {
    fetch(`${baseURL}add-tags`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tags)
    })
      .then(r => r.json())
      .then(tags => console.log(tags));
  }

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
    const tags = {tag_name: formState.tags};
    tags.forEach(tag => addTags(tag))
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
