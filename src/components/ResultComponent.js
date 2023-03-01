import React from "react";

function ResultComponent({quesCount,playerScore}){
        return <>
           <div className=" flex h-screen justify-center items-center bg-gray-400">
           <div className="flex flex-col  items-center bg-white h-fit p-8 rounded-3xl " >
                <h2 className="my-4 text-green-800 font-semibold text-xl">Assessment Submitted</h2>
                <span><b>Question Asked</b>: {quesCount}</span>
                <span><b>Question Correct</b>: {playerScore}</span>
                <span><b>Your score</b> : {((playerScore / quesCount) * 100).toFixed(2)}</span>
                
            </div>
            
           </div>
            </>
    }

export default ResultComponent;