

function NavigatorHead ({ques,getPrevQues,getNextQues,currQues}){
  
      return <>
          <div>
              <div className="bg-white flex justify-between p-2 rounded-tr-lg">
                {currQues > 0 && (<button onClick={getPrevQues}>&#8678;</button>)}

                <h6>Attempt Questions Here</h6>
                {currQues < ques.length - 1 && (<button onClick={getNextQues}>&#8680; </button>)}
              </div>
            </div>
      </>
}
export default NavigatorHead