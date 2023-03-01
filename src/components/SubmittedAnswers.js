function  SubmittedAnswers({submissionData}){


    Object.keys(submissionData).map((indx) => {
    return (
      <div>
        <b>  → {parseInt(indx) + 1}</b>: {submissionData[indx]}
      </div>
    );
  });
}

export default SubmittedAnswers;