import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"

import data from "../data/data"


function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}



export default function Home() {
  const navigate = useNavigate()
  
  const handleStartGame = () => {
      const shuffledData = shuffleArray(data)
      navigate("/game", { state: { shuffledData } })
      console.log("shuffled data from home.jsx", shuffledData)
    }

    return (
        <>
               <h1>Ikea vs Death Metal</h1>
               <div className="button-start">
                 <button onClick={handleStartGame}>
                   Start Game
                 </button>
                <p>
                    If you dare to!
                </p>               
               </div>
        </>
    )
}
