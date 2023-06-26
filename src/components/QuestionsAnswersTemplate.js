import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

//not PascalCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({
  data: { question, answers, correct_answer },
  currentIndex,
  handleNextQuestion,
  clickHandle,
  score,
  showAnswers,
  toggle,
  disabled,
}) => {
  const ref = useRef(null);

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="h-100 w-75 align-items-center justify-content-center">
      <div className="d-flex flex-row justify-content-center">
        <button
          className="btn btn-dark btn-lg mb-3 mt-5"
          onClick={navigateHome}
        >
          MAIN MENU
        </button>
      </div>

      <div className="d-flex flex-column align-items-center container mt-2">
        <h1>SCORE</h1>

        <div className="btn btn-lg btn-info ">{score}</div>
      </div>

      <div className="container mt-5">
        <div>
          {/*dangerouslySetInnerHTML was added for correct rendering of text*/}

          <h2
            className="text-center h4"
            dangerouslySetInnerHTML={{ __html: question }}
            key={question[currentIndex]}
          />
        </div>
        <div className="d-flex flex-column">
          {answers.map((answer, index) => {
            const changeBtnStyle =
              showAnswers && toggle
                ? answer === correct_answer
                  ? "btn btn-success"
                  : "btn btn-danger"
                : "";

            return (
              <button
                onClick={() => clickHandle(answer, correct_answer)}
                className={`btn btn-primary mt-2 ${changeBtnStyle}`}
                disabled={disabled}
                ref={ref}
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}

                // {disabled ? "btn btn-primary" : changeBtnStyle}
              />
            );
          })}
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-center">
        {showAnswers && (
          <button
            className={`mb-5 btn  btn-lg btn-light`}
            onClick={() => handleNextQuestion()}
            disabled={!disabled}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionsAnswersTemplate;
