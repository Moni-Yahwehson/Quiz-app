import Options from "./Options";

function Questions({ questions }) {
  return (
    <div>
      <h4>{questions.questions}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Questions;
