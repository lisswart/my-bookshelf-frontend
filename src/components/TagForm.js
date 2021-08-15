import { useState } from 'react';
// import { components } from 'react-select';

function TagForm({ tags, setIsAddTag }) {

  const baseURL = 'http://localhost:9393/';

  const [ formState, setFormState ] = useState({
    tags: []
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

  function handleSelect(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    setFormState({
      ...formState,
      [fieldName]: userInput
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    tags.forEach(tag => addTags(tag))
    setIsAddTag(false);
  }

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Tags: </label>
        <select onChange={handleSelect} 
          name="tags" id="tags" multiple="multiple">
          {
            tags.map(tag => 
              <option key={tag.id} value={tag.id}>{tag.tag_name}</option>)
          }
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default TagForm;
