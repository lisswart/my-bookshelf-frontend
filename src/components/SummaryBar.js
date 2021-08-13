import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Group from './Group';
import Tag from './Tag';
import Status from './Status';
import AllBooks from './AllBooks';
import BooksFilteredByStatus from './BooksFilteredByStatus';
import BooksFilteredByTags from './BooksFilteredByTags';
import BooksFilteredByGroup from './BooksFilteredByGroup';

function SummaryBar({ books, setBooks }) {

  const [ groups, setGroups ] = useState([])
  const [ tags, setTags ] = useState([]);
  const [ statuses, setStatuses ] = useState([]);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/statuses', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(statuses => setStatuses(statuses));
      return () => {
        myAbortController.abort();
      };
  }, []);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/tags', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(tags => setTags(tags));
      return () => {
        myAbortController.abort();
      };
  }, []);

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch('http://localhost:9393/groups', 
      { signal: myAbortController.signal })
      .then(r => r.json())
      .then(groups => setGroups(groups));
      return () => {
        myAbortController.abort();
      };
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

      <NavLink to="/books" style={{marginLeft: "2rem"}}>
        Books: {books.length}
      </NavLink>

      <div style={{display: "flex", paddingLeft: "2rem"}}>
        <div className="tags-container" style={{ marginTop: "1rem"}}>
          Read Status: 
          {statuses && populateStatuses()}
        </div>

        <p>Groups/ Series:</p>
        <div className="tags-container" style={{ marginTop: "1rem", 
          marginLeft: "0.5rem"}}>          
          {groups && populateGroups()}
        </div>

        <p>Tags:</p>
        <div className="tags-container" style={{ marginTop: "1rem", 
          marginLeft: "0.5rem"}}>          
          {tags && populateTags()}
        </div>
      </div>
            
      <Switch>
        <Route exact path="/books">
          <AllBooks books={books} setBooks={setBooks} />
        </Route>
        <Route path="/groups/:id">
          <BooksFilteredByGroup books={books} setBooks={setBooks} />
        </Route>
        <Route path="/tags/:id">
          <BooksFilteredByTags books={books} setBooks={setBooks} />
        </Route>
        <Route path="/statuses/:id">
          <BooksFilteredByStatus books={books} setBooks={setBooks} />
        </Route>
      </Switch>

    </div>    
  );
}

export default SummaryBar;
