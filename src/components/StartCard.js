function StartCard({setState}){

const clickHandler=()=>{
    setState("QuizStarted")
}    
return <>
    <div className="flex flex-col justify-center items-center h-screen bg-pink-300/70 ">
        <div className="flex flex-col justify-around items-center bg-gray-200 rounded-lg p-4 shadow-xl">
        <h1 className="font-bold text-3xl m-8">Welcome to the Quiz</h1>
        <button className="bg-green-700 text-white font-bold rounded-lg p-4 px-7 hover:bg-green-500" onClick={clickHandler}>Start</button>
        </div>
      </div>
</>
}
export default StartCard;