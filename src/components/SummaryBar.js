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
      .then(statuses => setStatuses(statuses));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9393/tags')
      .then(r => r.json())
      .then(tags => 
        setTags(tags));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9393/groups')
      .then(r => r.json())
      .then(groups => setGroups(groups));
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
             setBooks={setBooks}
             className="tags" />
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

      <NavLink to="/books" style={{marginLeft: "2rem", color: "black"}}>
        Books: {books.length}
      </NavLink>

      <div style={{display: "flex", paddingLeft: "2rem"}}>
        <div className="statuses-container" style={{ marginTop: "1rem"}}>
          Read Status: 
          {statuses && populateStatuses()}
        </div>
        <span className="groups-container" style={{ marginTop: "1rem", 
          marginLeft: "2rem"}}>
          Groups/Series: 
          {groups && populateGroups()}
        </span>
        <span className="tags-container" style={{ marginTop: "1rem", 
          marginLeft: "2rem"}}>
          Tags: 
          {tags && populateTags()}
        </span>
      </div>
            
      <DisplayBooksPanel books={books} setBooks={setBooks} />

    </div>    
  );
}

export default SummaryBar;
