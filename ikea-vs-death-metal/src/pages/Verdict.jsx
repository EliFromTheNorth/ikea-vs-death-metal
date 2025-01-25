import { useNavigate, useLocation } from "react-router-dom"
import Title from "../components/Title"

export default function Verdict({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems, currentItem, score, buttonClicked} = location.state || {}

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)

        // console.log("Updated Remaining Items:", updatedItems)

        // const updatedScore = ((currentItem.band && buttonClicked === "bandBtn") || (!currentItem.band && buttonClicked === "ikeaBtn")) ? score + 1 : score
        
        if (updatedItems.length > 0) {
            navigate("/game", { state: { updatedItems: updatedItems, updatedScore: updatedScore  } })
         } else {
            navigate("/endGame", { state: { score: updatedScore } })
         }

        //  console.log("score +1 should happen nooooooooooooooooooooooooooooooooooooooowwwwwwwwwwwwwwwww")
        //  console.log("updates score is: ", updatedScore)
    }

    //***************************************** */

    let correctAnswer = null

    if ((currentItem.band && buttonClicked === "ikeaBtn") || (!currentItem.band && buttonClicked === "bandBtn")) {
      correctAnswer = false
  } else if 
      ((currentItem.band && buttonClicked === "bandBtn") || (!currentItem.band && buttonClicked === "ikeaBtn")) {
        correctAnswer = true
  }

  const updatedScore = correctAnswer ? score + 1 : score


    //***************************************** */

    

    return (
        <>
          {/* <Title /> */}
          <h1>{correctAnswer ? "Hell YES!" : "Ouch"}</h1>
          <h2> {currentItem.name} is {currentItem.band ? "a band" : "an ikea product"}!</h2>

        {/* tady bude condicional statement ze bud component ikeaimage nebo component video, podle toho, esli je .band true */}
          <img src={currentItem.image} alt="" width="200" />
          <br />
          <button onClick={handleNext} >Next</button>
         </> 
    )

}