import { useEffect,useRef, useState } from "react"

const GameBox = ({buttonTextChange}) => {
    const divRef = useRef(null);
    const [greenTime,setGreenTime] = useState(null);
    const [message,setMessage] = useState("");
    const handleClick =()=>{
        if(divRef.current.style.backgroundColor === 'green'){
            const newTime = new Date().getTime();
            const reactionTime = newTime - greenTime;
            setMessage(`Your reaction time is ${reactionTime}ms`);
            buttonTextChange();
        }
        else{
            setMessage('You clicked too early');
            buttonTextChange();
            
        }
    }
    useEffect(()=>{
       const randomTime = Math.floor(Math.random()*6000) + 1000;
       const timer = setTimeout(()=>{
            if(divRef.current){
                divRef.current.style.backgroundColor = 'green';
                setGreenTime(new Date().getTime());
            }
       },randomTime)
       return ()=>clearTimeout(timer);
    },[])
  return (
    <>
     {message ? <p>{message}</p> :<div className='Game-Box' ref={divRef} onClick={handleClick}></div>}
    </>
   
  )
}
export default GameBox