import { useNavigate, useLocation, } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data/data"



export default function Game() {

  const navigate = useNavigate()
  const location = useLocation()
    
  const {shuffledData, updatedItems, updatedScore } = location.state || {}

  const [score, setScore] = useState(updatedScore || 0)

  const [remainingItems, setRemainingItems] = useState(shuffledData || updatedItems || [])

  const [currentItem, setCurrentItem] = useState(remainingItems[0] || null)

  useEffect(() => {
      if (remainingItems.length > 0) { 
        setCurrentItem(remainingItems[0])
      } else {
        console.log("no items in array")
      }
    }, [remainingItems])

  const handleButton = (buttonName) => {
      navigate("/verdict", { 
        state: { remainingItems, currentItem, score, buttonClicked: buttonName } 
      })
  }

  const remainingQuestions = data.length - remainingItems.length + 1

    return (
        <div className="game-container">
          <h1 className="item-name">{currentItem.name}</h1>
          <div className="game-buttons">
            <button className="button-game" onClick={() => handleButton("ikeaBtn")}>
              <img className="button-ikea-image" src="/images/IkeaBag.png" alt="ikea button"/>
            </button>
            <button className="button-game" onClick={() => handleButton("bandBtn")}>
              <img className="button-band-image" src="/images/Angel.jpg" alt="metal button"/>
            </button>
            <div className="remaining-questions">
              <p>Assembly Progress: {remainingQuestions} of {data.length}</p>
            </div>
          </div>

        </div>
      );
}