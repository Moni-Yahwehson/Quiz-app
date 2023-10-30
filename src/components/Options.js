function Options({questions}) {
    return (
        <div className="options">
        {questions.options.map((options) => (
          <button className="btn btn-option" key={options}>{options}</button>
        ))}
      </div>
    )
}

export default Options
