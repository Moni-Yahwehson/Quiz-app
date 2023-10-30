function Progress({index, numQuestions}) {
    return (
        <header className="progress">
            <p>Questions<strong>{index}</strong> / {numQuestions}</p>
        </header>
    )
}

export default Progress
