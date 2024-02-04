function Progress({
  index,
  numberQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        {" "}
        Question <strong>{index + 1}</strong> {numberQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
