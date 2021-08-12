import { useState, useEffect } from 'react';
import DisplayBooksPanel from './DisplayBooksPanel';
import { NavLink } from 'react-router-dom';
import Group from './Group';
import Tag from './Tag';
import Status from './Status';

function SummaryBar({ books, setBooks }) {

  const [ groups, setGroups ] = useState([])
  const [ tags, setTags ] = useState([]);
  const [ statuses, setStatuses ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9393/statuses')
      .then(r => r.json())
      .then(statuses => {
        console.log(statuses);
        setStatuses(statuses);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9393/tags')
      .then(r => r.json())
      .then(tags => {
        console.log(tags);
        setTags(tags);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9393/groups')
      .then(r => r.json())
      .then(groups => {
        console.log(groups);
        setGroups(groups);
      });
  }, []);

  function populateGroups() {
    return groups.map(group => (
        <Group key={group.id} group={group} 
               setBooks={setBooks} />
    ));
  }

  function populateTags() {
    return tags.map(tag => (
        <Tag key={tag.id} tag={tag} 
             setBooks={setBooks} />
    ));
  }

  function populateStatuses() {
    return statuses.map(status => (
        <Status key={status.id} status={status} 
                setBooks={setBooks}/>
    ));
  }

  return (    
    <div className="summary-bar">

      <NavLink to="/books" style={{marginLeft: "2rem"}}>
        Books: {books.length}
      </NavLink>

      <div style={{display: "flex", paddingLeft: "2rem"}}>
        <span className="groups-container" style={{ marginTop: "1rem"}}>
          Groups/Series: {groups && populateGroups()}
        </span>
        <span className="tags-container" style={{ marginTop: "1rem", 
          marginLeft: "2rem"}}>
          Tags: {tags && populateTags()}
        </span>
        <div className="statuses-container" style={{ marginTop: "1rem", 
          marginLeft: "2rem"}}>
          Read Status: {statuses && populateStatuses()}
        </div>
      </div>
            
      <DisplayBooksPanel books={books} setBooks={setBooks} />

    </div>    
  );
}

export default SummaryBar;
