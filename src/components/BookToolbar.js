
function BookToolbar({ book }) {
  return (
    <div className="toolbar">
      <button className="pencil"></button>
      <button className="tag"></button>
      <button className="page"></button>
      <button className="group"></button>
      <button className="wastebasket"></button>
    </div>
  )
}

export default BookToolbar;

/* <span className="tooltip-text">edit</span>
<span className="tooltip-text">tags</span>
<span className="tooltip-text">notes</span>
<span className="tooltip-text">group</span>
<span className="tooltip-text">delete</span> */