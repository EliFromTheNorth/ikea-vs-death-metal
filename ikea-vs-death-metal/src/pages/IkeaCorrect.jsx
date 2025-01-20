import { useNavigate, useLocation, Routes, Route, } from "react-router-dom"
import { useState } from "react"


export default function IkeaCorrect({state}) {
    const navigate = useNavigate()
    const location = useLocation()
    // const handleNext = () => {
    //     navigate("/game")
    // }

    const { remainingItems} = location.state || {};

    const handleNext = () => {
        const updatedItems = remainingItems.slice(1)
        // const nextItem = updatedItems[0] || null
        // const nextItem = updatedItems[0]

        // console.log("Next Item:", nextItem);
        console.log("Updated Remaining Items:", updatedItems)

        if (remainingItems.length > 0) {
            // setRemainigItems(updatedItems)
            // setCurrentItem(nextItem)
            navigate("/game", { state: { updatedItems: updatedItems } })
        } else {
            alert("Game over bro")
        }


        

        
    }

    return (
        <>
            <h1>Yes, it's an ikea product!</h1>
            <button onClick={handleNext} >Next</button>
        </>
    )
}


// if (updatedItems.length > 0) {
//     navigate("/game", { state: { remainingItems: updatedItems, currentItem: nextItem } });
//   } else {
//     navigate("/game-over"); // Navigate to a game-over screen if no items left
//   }
// };