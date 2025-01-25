import { useNavigate, useLocation, } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Game() {

  const navigate = useNavigate()
  const location = useLocation()
    
  const {shuffledData, updatedItems, updatedScore } = location.state || {}

  const [score, setScore] = useState(updatedScore || 0)

  const [remainingItems, setRemainingItems] = useState(shuffledData || updatedItems || [])

    console.log("remainingItems are:", remainingItems)

  const [currentItem, setCurrentItem] = useState(remainingItems[0] || null)

    console.log("currentItem is: ", currentItem)

  useEffect(() => {
      if (remainingItems.length > 0) { 
        setCurrentItem(remainingItems[0])
        // setScore(updatedScore)
      } else {
        console.log("no items in array")
      }
    }, [remainingItems])
    
    console.log("remainingItems after use effect are:", remainingItems)
    console.log("current item after use effect :", currentItem)
    console.log("score after use effect :", score)

  const handleButton = (buttonName) => {
      navigate("/verdict", { 
        state: { remainingItems, currentItem, score, buttonClicked: buttonName } 
      })
  }

    return (
        <div>
          <h1>{currentItem.name}</h1>
          <button className="button-game" onClick={() => handleButton("ikeaBtn")}>
            <img className="button-ikea-image" src="/images/71cQiE5yR2L-Photoroom.png" alt="" width ="200"/>
          </button>
          <button className="button-game" onClick={() => handleButton("bandBtn")}>
            <img className="button-band-image" src="/images/b7f4b4b8-06f9-4ee9-bebf-15ed222e19e9.jpg" alt="" width ="200"/>
          </button>

        </div>
      );
}

// console.log("remainingItems are: " + remainingItems)

