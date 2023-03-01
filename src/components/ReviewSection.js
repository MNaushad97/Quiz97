import React from "react";

function ReviewSection ({submissionData}){

  const submittedAnswers=Object.keys(submissionData).map((indx) => {
    return (
      <div key={indx}>
        <b>  → {parseInt(indx) + 1}</b>: {submissionData[indx]}
      </div>
    );
  });


  return<>
  <div className="bg-slate-300 h-auto rounded-l-lg flex flex-col p-4">
        <h6>Review Answers Here</h6>
        {submittedAnswers}
      </div>
  </>
}
export default ReviewSection;
