
import { useState } from "react";
import initialQuestions from "../constants/Questions.json";
import questionsYes from "../constants/QuestionsYes.json";
import questionsNo from "../constants/QuestionsNo.json";
import Question from "../component/Question";
import Result from "./thankyou/result";
// import Result from "./Result";

function HomePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [currentQuestionYes, setCurrentQuestionYes] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState(initialQuestions);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [answer, setAnswer] = useState("");
  const [questionYes, setQuestionYes] = useState(questionsYes);
  const [questionNo, setQuestionNo] = useState(questionsNo);
const [showAdvEIDInput, setShowAdvEIDInput] = useState(false); // State to toggle showing Adv EID input
  const handleNextQuestion = (answer) => {
    setAnswer(answer);
    setUserAnswers([...userAnswers, answer]);
    
    // Determine the next set of questions based on the answer
    if (answer === "Yes") {
      setQuestions(questionsYes);
    } else {
      setQuestions(questionsNo);
    }

    setCurrentQuestion(0); // Reset to the first question of the new set
    setAnswerSelected(true);
  };

  const handleQuestionYes = (answer) => {

    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestionYes(currentQuestionYes + 1); // Move to the next question in the 'Yes' set
    console.log(questionYes[currentQuestionYes].question)
   
if (questionYes[currentQuestionYes].question === "Do you have an account in NextRoll? " && answer === "Yes") {
  setShowAdvEIDInput(true);
}
  };

  const handleQuestionNo = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestionNo(currentQuestionNo + 1); // Move to the next question in the 'No' set
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setCurrentQuestionNo(0);
    setUserAnswers([]);
    setQuestions(initialQuestions);
    setAnswerSelected(false);
    setAnswer("");
    setShowAdvEIDInput(false);
  };

  return (
    <div className="App">
      <div className="page-container">
        <div className="container">
          <h1>
            <img
              src="https://ok1static.oktacdn.com/fs/bco/1/fs01ju46rniPX1OwK0h8"
              className="auth-org-logo"
              alt="NextRoll logo"
              aria-label="NextRoll logo"
            />
          </h1>
          {/* Questions Component */}
          {!answerSelected && currentQuestion < questions.length && (
            <Question
              question={questions[currentQuestion]}
              onAnswerClick={(answer) => handleNextQuestion(answer)}
            />
          )}
          {answerSelected && answer === "Yes" && currentQuestionYes < questionYes.length && (
            <Question
              question={questionYes[currentQuestionYes]}
              onAnswerClick={(answer) => handleQuestionYes(answer)}
            />
          )}
{showAdvEIDInput && (
  <div>
    <label>
      Kindly provide the Adv EID:
      <input type="text" />
    </label>
  </div>
)}
          {answerSelected && answer === "No" && currentQuestionNo < questionNo.length && (
            <Question
              question={questionNo[currentQuestionNo]}
              onAnswerClick={(answer) => handleQuestionNo(answer)}
            />
          )}
           {currentQuestionNo === questionNo.length && (
        <Result      
        />
      )}
        </div>
      </div>
      {/* <Result/> */}
      {/* Result Component */}
     
    </div>
  );
}

export default HomePage;
