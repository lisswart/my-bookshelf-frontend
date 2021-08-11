import { useState } from 'react';
import DisplayBooksPanel from './DisplayBooksPanel';

function SummaryBar({ books, setBooks }) {

  const [ isFilterOn, setIsFilterOn ] = useState(false);

  function groupBy(books, property) {
    return books.reduce((group, currentBook) => {
      let key = currentBook[property];
      if(!group[key]) {
        group[key] = [];
      }
      group[key].push(currentBook);
      return group;
    }, {});
  }

  const groupedBooks = groupBy(books, "book_group");
  const groupList = Object.keys(groupedBooks);

  const bookGroups = books.map(book => book.book_group);
  const uniques = new Set();
  for(let i=0; i < bookGroups.length; ++i) {
    uniques.add(bookGroups[i]);
  }

  const iterableSet = uniques.values();
  let array = [];
  for(let i=0; i < uniques.size; ++i) {
    array.push(iterableSet.next().value);
  }

  function filterBooksByGroup(event) {
    
    setBooks(filteredBooks);
    setIsFilterOn(!isFilterOn);
    return filteredBooks;
  }
  const filteredBooks = books.filter(book => book.book_group === "fiction")

  return (
    <div className="summary-bar">
      <div>
        <span>Books: {books.length} </span>
        <span style={{paddingLeft: "1rem"}}>Grouplist: </span>
        <select onChange={filterBooksByGroup}>
          {
            groupList.map((group, i) => 
              <option key={i} value={group}>
                {group}
              </option>)
          }
        </select>
      </div>
      <span>Not Begun: 10</span>
      <span>In Progress: 5</span>
      <span>Completed: 3</span>      
        <DisplayBooksPanel books={books} 
            setBooks={setBooks} />      
    </div>
  );
}

export default SummaryBar;