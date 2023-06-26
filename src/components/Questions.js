import React, { useEffect, useState, useRef } from "react";

import Axios from "axios";


import QuestionsAnswersTemplate from "./QuestionsAnswersTemplate";
import { Link } from 'react-router-dom';




const TriviaRequest = ({url}) => {
  
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showAnswers, setShowAnswers] = useState(false);

  
    const [score, setScore] = useState (0)
    const [disabled, setDisabled] = useState(false);
    const[toggle,setToggle] = useState(true)
    // const ref = useRef(null);

  useEffect(() => {
    if (currentIndex < question.length) {
      const newIndex = currentIndex + 1;
      console.log(newIndex);
      setCurrentIndex(newIndex);
    }
  }, [question]);

  // need to fetch 12 questions indstead of 10 bc i lost two indexes somewhere in the code

  // const url = "https://opentdb.com/api.php?amount=12&category=23&type=multiple";

  useEffect(() => {
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.results);
        // settAllQ(data.results)

        {
          /*we need to modify object from db to be able to manipulate its constituents*/
        }
        const question = data.results.map((q) => ({
          ...q,
          answers: [q.correct_answer, ...q.incorrect_answers].sort(
            () => 0.5 - Math.random()
          ),
        }));

        setQuestion(question);
        // settAllQ(data.results)
      });
  }, []);

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
    setDisabled(!disabled)
   

  };

  useEffect(() => {
    if(disabled) {
      setDisabled(!disabled)
      setToggle(false)
      
    }

  }, [question])


     const clickHandle = (answer, correct_answer) => {
       setDisabled(true);
       setToggle(true)

      if (answer === correct_answer) {
    //       console.log("yay");
          setScore(score + 1);
         setShowAnswers(true); 
         
        
       
     } else {
    //      console.log("nay");
      setShowAnswers(true);
       
       }
      
    //  console.log(score)
    };

  {
    /*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/
  }
  return question.length > 0 ? (
    <div className="container h-100 d-flex  align-items-center justify-content-center">
      {currentIndex >= question.length ? (
        <div className="d-flex flex-column align-items-center justify-content-center">
       <div  className="container mt-5 py-3 px-5  d-flex flex-column align-items-center justify-content-center">
         <h1>
          END OF THE GAME 
        </h1>
        <h1>
        THANK YOU FOR PLAYING
        </h1>
        <h5 className="mt-2">Your score is {parseInt(score)} points</h5> 
        <h5 className="mt-2 display-2">{(score >= 6) ? <p className="text-success">You won!</p> : <p  className="text-danger">You lost!</p>}</h5> 
        
        </div>
        <button className="mt-4 btn btn-lg btn-outline-warning"><Link className='text-decoration-none text-body' to='/'>
        MAIN MENU</Link>
      </button> </div>
      ) : (
        <QuestionsAnswersTemplate
          data={question[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          clickHandle={clickHandle}
          disabled={disabled}
          score={score}
          toggle={toggle}
         
        />
      )}
    </div>
  ) : (
    <p className="display-5 "> Some patience please </p>
  );
};

export default TriviaRequest;
