import React, { useState } from "react";
import QuizActiveSection  from './QuizActiveSection'
import  ResultComponent  from "./ResultComponent";
import questions from './SetOfQuestions'
import StartCard from "./StartCard";



function Homepage (){
  const [state,setState]=useState("Start");
  const [playerScore,setPlayerScoreScore]=useState(0)
  const submitHandler = (score) => {
    setState("Result");
    setPlayerScoreScore(score);
  }

  return <>
  {state==="Start"&&<StartCard setState={setState}/>}
  {state==="QuizStarted"&&<QuizActiveSection questions={questions} onSubmit={submitHandler}/> }
  {state==="Result"&&<ResultComponent quesCount={questions.length} playerScore={playerScore}/>}

  </>
}
export default Homepage;