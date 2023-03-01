import React from "react";
import Choices from "./Choices";

function QABox({questionIndex,activeQuestion,selectedOption,updateSubmissionData}){
      return <>
      <div className="flex flex-col items-start align-middle mx-2" >
        <span className="my-2">Q{questionIndex + 1}.<br></br>{activeQuestion.ques}</span>
        <Choices activeQuestion={activeQuestion} selectedOption={selectedOption} updateSubmissionData={updateSubmissionData} questionIndex={questionIndex}/>
      </div>
      </>;
  }

export default QABox;
