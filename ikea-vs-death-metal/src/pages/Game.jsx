import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data/data"

function shuffleArray() {
  const shuffledArray = [];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Game() {

  // console.log(data)

    // const names = data.map(item => item)
    // console.log(names)

    // const guess = names[Math.floor(Math.random() * names.length)]
    // console.log(guess)

    // const lala = Math.floor(Math.random() * data.length)
    // console.log(lala)


    
    const newDataArray = shuffleArray(data)
    console.log(newDataArray)

    const [remainingItems, setRemainingItems] = useState(newDataArray)
    
    const [currentItem, setCurrentItem] = useState(null)
    
    useEffect(() => {
      if (remainingItems.length > 0) { 
        setCurrentItem(remainingItems[0])
      }
    }, [remainingItems])
    

    // const oneObject = data[Math.floor(Math.random() * data.length)]
    // console.log(oneObject)

    const navigate = useNavigate()

    
    const updatedItems = remainingItems.slice(1)
    
    if (updatedItems.length === 0) {
      alert("Game Over! You've played all items.")
      setCurrentItem(null)
    } else {
      setRemainingItems(updatedItems);
      setCurrentItem(updatedItems[0]);
      console.log("current item is " + currentItem)
    }
    
    
    const handleIkeaBag = () => {
      currentItem.band ? navigate("/bandFail") : navigate("/ikeaCorrect")
    }

    const handleMetalBtn = () => {
      currentItem.band ? navigate("/bandCorrect") : navigate("/ikeaFail")
    }

    return (
        <div>
          {/* <h1>{currentItem.name}</h1> */}
          <button onClick={handleIkeaBag}>
            <img src="/images/71cQiE5yR2L._AC_SL1239_.jpg" alt="" width ="200"/>
          </button>
          <button onClick={handleMetalBtn}>
            <img src="/images/b7f4b4b8-06f9-4ee9-bebf-15ed222e19e9.jpg" alt="" width ="200"/>
          </button>

        </div>
      );
}

// console.log("remainingItems are: " + remainingItems)

