import { useNavigate, useLocation } from "react-router-dom"

export default function IkeaCorrect({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems} = location.state || {}

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)

        console.log("Updated Remaining Items:", updatedItems)

        if (updatedItems.length > 0) {
            navigate("/game", { state: { updatedItems: updatedItems } })
        } else {
            // alert("Game over bro")
            navigate("/endGame")
        }
    }

    return (
        <>
            <h1>Yes, it's band!</h1>
            <button onClick={handleNext} >Next</button>
        </>
    )
}