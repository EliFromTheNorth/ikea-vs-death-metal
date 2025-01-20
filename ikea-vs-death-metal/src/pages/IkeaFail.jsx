import { useNavigate, useLocation } from "react-router-dom"

export default function IkeaFail({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems } = location.state || {}

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)

        console.log("Updated Remaining Items:", updatedItems)

        if (remainingItems.length > 0) {
            navigate("/game", {state: { updatedItems: updatedItems }})
        } else {
            alert("Game over bro")
        }
    }

    return (
        <>
            <h1>Nope, it's an ikea product!</h1>
            <button onClick={handleNext} >Next</button> 
        </>
    )
}