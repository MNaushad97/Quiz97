function Choices({activeQuestion,selectedOption,updateSubmissionData,questionIndex}){
    
    const question = activeQuestion;
    const onChange = (value) => {
        updateSubmissionData(questionIndex, value);
      };


    return question.choices.map((option) => {
      return <>

        <label className="flex justify-between">
          <input
            type="radio"
            checked={selectedOption === option.val}
            onChange={() => onChange(option.val)}
            value={option.val}
          />
          {option.text}
        </label>

        </>;
    });
    

}

export default Choices;