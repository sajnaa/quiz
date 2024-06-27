/* eslint-disable react/prop-types */

const Question = ({question, onAnswerClick = () => {}}) => {
    return (
      <div className="question" style={{backgroundColor:"#fff"}}>
        <h2>{question.question}</h2>
        <ul className="options">
          {question.answerOptions.map((option) => {
            return (
              <li key={option.text}>
                <button onClick={() => onAnswerClick( option.text)}>
                  {option.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default Question;