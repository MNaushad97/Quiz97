import React, { useState } from "react";
import QABox  from "./QABox";
import  ReviewSection from "./ReviewSection";
import NavigatorHead from "./NavigatorHead";
import TimerHeader from "./TimerHeader";

const startTime=Date?.now()+32400;

function QuizActiveSection ({questions,onSubmit}){

  const [currQues,setCurrQues]=useState(0);
  const [submittedAnswers,setSubmittedAnswers]=useState({});


  const submittedDataHandler = (indx, value) => {
    const collectedData = Object.assign({},submittedAnswers);
    collectedData[indx] = value;
    setSubmittedAnswers(collectedData);
  };

  const getPrevQues = () => {
    if (currQues > 0) {
      setCurrQues((prev)=>prev-1)
    }
  };
  const getNextQues = () => {
    if (currQues < questions.length - 1) {
      setCurrQues((prev)=>prev+1)
    }
  };

  function calFinalScore () {

    let score = 0;
    Object.keys(submittedAnswers).forEach((quesIndx) => {
      const attemptedAns = submittedAnswers[quesIndx];
      const correctAns = questions[parseInt(quesIndx)].ans;

      if (correctAns === attemptedAns) {
        score++;
      }
    });

    return score;
  };

  function submitHandler () {
    const score = calFinalScore();

    onSubmit(score);
  };
  const attemptedQuestions = Object.keys(submittedAnswers).length;
  const isLastQuestion= attemptedQuestions === questions.length  

  return <>
  
  <div className="h-screen flex justify-center items-center bg-green-600/20">
  <div className="bg-pink-300 flex justify-center items-center h-72 rounded-lg shadow-2xl">
        <div className="flex flex-col bg-slate-300 h-72 items-center">
        <TimerHeader startTime={startTime} submitHandler={submitHandler}/>  
        <ReviewSection
          submissionData={submittedAnswers}
          totalQuestionsCount={questions.length}
        ></ReviewSection>
        </div>
        <div className="flex flex-col justify h-72">
         <NavigatorHead getPrevQues={getPrevQues} getNextQues={getNextQues} ques={questions} currQues={currQues} />
          <div className="flex flex-col justify-around h-auto">
          <QABox
            questionIndex={currQues}
            activeQuestion={questions[currQues]}
            updateSubmissionData={submittedDataHandler}
            selectedOption={submittedAnswers[currQues]}
          ></QABox>

            {isLastQuestion&&
            <button className="bg-green-200 rounded-lg p-4 my-4 mx-4  " onClick={submitHandler}>
              Submit
            </button>
            }
          </div>

        </div>

      </div>
  </div>
  </>


}
export default QuizActiveSection;

