import { useNavigate, useLocation } from "react-router-dom"
import VerdictImage from "../components/VerdictImage"
import VerdictVideo from "../components/VerdictVideo"

export default function Verdict({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems, currentItem, score, buttonClicked} = location.state || {}

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)
  
        if (updatedItems.length > 0) {
            navigate("/game", { state: { updatedItems: updatedItems, updatedScore: updatedScore  } })
         } else {
            navigate("/endGame", { state: { score: updatedScore } })
         }
    }

    let correctAnswer = null

    if ((currentItem.band && buttonClicked === "ikeaBtn") || (!currentItem.band && buttonClicked === "bandBtn")) {
      correctAnswer = false
  } else if 
      ((currentItem.band && buttonClicked === "bandBtn") || (!currentItem.band && buttonClicked === "ikeaBtn")) {
        correctAnswer = true
  }

  const updatedScore = correctAnswer ? score + 1 : score    

    return (
        <div className="verdictContainer">
            <h1>{correctAnswer ? "Hell YES!" : "Ouch"}</h1>
            <h2> {currentItem.name} is {currentItem.band ? "a band" : "an ikea product"}!</h2>
            <br />
            {currentItem.band ? <VerdictVideo /> : <VerdictImage />}
            <br />
            <button className="button-start" onClick={handleNext}><span className="text">Next</span></button>
         </div> 
    )

}