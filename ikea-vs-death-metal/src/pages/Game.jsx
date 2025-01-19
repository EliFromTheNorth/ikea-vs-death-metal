import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


console.log("hello")


export default function Game() {

  const navigate = useNavigate()
  const location = useLocation()
    const {shuffledData} = location.state || {}


    const [remainingItems, setRemainingItems] = useState(shuffledData || [])

    console.log("remainingItems are:", remainingItems)

    
    const [currentItem, setCurrentItem] = useState(remainingItems[0] || null)

    console.log("currentItem are: ", currentItem)

    
    
    
    useEffect(() => {
      if (remainingItems.length > 0) { 
        setCurrentItem(remainingItems[0])
      } else {
        setCurrentItem(null); // Set to null if no items remain
      }
    }, [remainingItems])
    
    console.log("remainingItems after use effect are:", remainingItems)

    
    
    // const oneObject = data[Math.floor(Math.random() * data.length)]
    // console.log(oneObject)
    

    // if (remainingItems.length === 0) {
    //   alert("Game Over! You've played all items.")
    //   setCurrentItem(null)
    // } else {
    //   setRemainingItems(updatedItems);
    //   setCurrentItem(updatedItems[0]);
    //   console.log("current item is " + currentItem.name)
    // }
    
    
    const handleIkeaBag = () => {
      currentItem.band ? navigate("/bandFail" , { state: { remainingItems, currentItem } }) : navigate("/ikeaCorrect", { state: { remainingItems, currentItem } })
    }
    
    const handleMetalBtn = () => {
      currentItem.band ? navigate("/bandCorrect", { state: { remainingItems, currentItem } }) : navigate("/ikeaFail", { state: { remainingItems, currentItem } })
    }
    
    // const updatedItems = remainingItems.slice(1)
    // setRemainingItems(updatedItems);

    // if (updatedItems.length === 0) {
    //   alert("Game Over! You've played all items.")
    //   // setCurrentItem(null)
    // }

    return (
        <div>
          <h1>{currentItem.name}</h1>
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

