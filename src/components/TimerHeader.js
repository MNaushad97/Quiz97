import { useEffect, useState } from "react";

function TimerHeader({startTime,submitHandler}){
    const [time, setTime] = useState({});
 

  useEffect(() => {
    const timerId = setInterval(()=>{

    const now= new Date();
    const diff=startTime-now;
    const min= Math.floor((diff%(1000*60*60))/(1000*60));
    const sec= Math.floor((diff%(1000*60))/1000);
    if(diff<0){
        
        setTime({min:0,sec:0});
        alert("Times Up !!!")
        submitHandler();
    }else{
        setTime({min:min,sec:sec})
    }
    }, 1000);
    return function cleanup() {
      
      clearInterval(timerId);
    };
  }, [startTime,submitHandler]);
  

 return <>
 <div className="m-2">
 <p>Submit it before {time.sec &&`${time?.min}:${time?.sec}`}</p>

 </div>
 </>     

}
export default TimerHeader;