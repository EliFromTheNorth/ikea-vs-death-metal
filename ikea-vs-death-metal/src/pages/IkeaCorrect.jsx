import { useNavigate, useLocation } from "react-router-dom"


export default function IkeaCorrect() {
    const navigate = useNavigate()
    const location = useLocation()
    // const handleNext = () => {
    //     navigate("/game")
    // }

    const { remainingItems = [], currentItem = null } = location.state || {};

    const handleNext = () => {
        if (remainingItems.length === 0) {
            alert("Game over bro")
            return
        }

        const updatedItems = [...remainingItems]
        updatedItems.shift()
        const nextItem = updatedItems[0]

        
        console.log("Next Item:", nextItem);
        console.log("Updated Remaining Items:", updatedItems)

        navigate("/game")
    }

    return (
        <>
            <h1>Yes, it's an ikea product!</h1>
            <button onClick={handleNext} >Next</button>
        </>
    )
}