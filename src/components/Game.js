import {  useState,useRef } from 'react'
import '../app/global.css' 
import GameBox from './GameBox'

const Game = () => {
  const buttonRef = useRef(null);
  const [gameState, setGameState] = useState(false)

  const gameStartHandleClick = () => {
    setGameState((prev)=>!prev);
    buttonRef.current.innerText = "Start Game"
   
  }
  const buttonTextChange = () => {
      buttonRef.current.innerText = "End Game"
  }
  return (
    <>
    <div className="Container">
      <button className="Start-Game-Button" onClick={gameStartHandleClick} ref={buttonRef}>Start Game</button>
    </div>
    <div className="Container">
        {gameState && <GameBox buttonTextChange={buttonTextChange}/>}
    </div>
   
    </>
    
  )
}
export default Game