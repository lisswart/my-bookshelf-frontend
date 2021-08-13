

function NotePage({ book }) {

  const notes = book.notes;
  const lines = notes.split('\n');

  return (
    <div className="notepage">
      {
        notes === ""
        ? <></>
        : lines.map((line, i) => <p key={i} 
            className="lines">{line}</p>)
      }
    </div>
  );
}

export default NotePage;
