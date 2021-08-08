function SummaryBar({ books }) {

  return (
    <div className="summary-bar">
      <p>Books: {books.length}</p>
      <span>Not Begun: 10</span>
      <span>In Progress: 5</span>
      <span>Completed: 3</span>
    </div>
  )
}

export default SummaryBar;