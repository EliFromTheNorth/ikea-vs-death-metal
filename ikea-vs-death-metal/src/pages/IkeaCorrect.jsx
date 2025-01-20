import { useNavigate, useLocation } from "react-router-dom"

export default function IkeaCorrect({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems, currentItem, score} = location.state || {}

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)

        console.log("Updated Remaining Items:", updatedItems)

        const updatedScore = score + 1
        
        if (updatedItems.length > 0) {
            navigate("/game", { state: { updatedItems: updatedItems, updatedScore: updatedScore  } })
        } else {
            navigate("/endGame", { state: { score: updatedScore } })
        }
        console.log("score +1 should happen nooooooooooooooooooooooooooooooooooooooowwwwwwwwwwwwwwwww")
        console.log("updates score is: ", updatedScore)
    }

    return (
        <>
            <h1>Yes, {currentItem.name} is an ikea product!</h1>
            <img src={currentItem.image} alt="" width="200" />
            <br />
            <button onClick={handleNext} >Next</button>
        </>
    )
}