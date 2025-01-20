import { useNavigate, useLocation, } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Game() {

  const navigate = useNavigate()
  const location = useLocation()
    
  const {shuffledData, updatedItems} = location.state || {}

  const [remainingItems, setRemainingItems] = useState(shuffledData || updatedItems || [])

    console.log("remainingItems are:", remainingItems)

  const [currentItem, setCurrentItem] = useState(remainingItems[0] || null)

    console.log("currentItem is: ", currentItem)


  useEffect(() => {
      if (remainingItems.length > 0) { 
        setCurrentItem(remainingItems[0])
      // } else {
      //   setCurrentItem(null)
      }
    }, [remainingItems])
    
    console.log("remainingItems after use effect are:", remainingItems)
    console.log("current item after use effect :", currentItem)

  const handleIkeaBag = () => {
    currentItem.band
      ? navigate("/bandFail", { state: { remainingItems, currentItem } })
      : navigate("/ikeaCorrect", { state: { remainingItems, currentItem } });
  };

  const handleMetalBtn = () => {
    currentItem.band
      ? navigate("/bandCorrect", { state: { remainingItems, currentItem } })
      : navigate("/ikeaFail", { state: { remainingItems, currentItem } });
  };
    

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

