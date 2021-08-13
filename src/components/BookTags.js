function BookTags({ booktags }) {

  return (
    <div className="booktags">
      {
        booktags.map((booktag, i) => <button key={i}><strong>{booktag}</strong></button>)
      }
    </div>
  )
}

export default BookTags
