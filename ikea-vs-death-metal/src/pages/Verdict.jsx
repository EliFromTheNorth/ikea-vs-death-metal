import { useNavigate, useLocation } from "react-router-dom"
import Title from "../components/Title"

export default function Verdict({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { remainingItems, currentItem, score, buttonClicked} = location.state || {}

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
    // const title = ((currentItem.band && buttonClicked === "ikeaBtn") || 
    // (!currentItem.band && buttonClicked === "bandBtn")) ? "Ouch"
    // : "yes yeyeye"

    return (
        <>
          <Title />
    
          {/* <h1>{title}</h1> */}
          <img src={currentItem.image} alt="" width="200" />
          <br />
          <button onClick={handleNext} >Next</button>
         </> 
    )

}

// **********************************************

// export default function Verdict ({state}) {
//     const location = useLocation()
//     const { currentItem, buttonClicked} = location.state || {}

//     console.log("2")


//     const isCorrect = (currentItem.band && buttonClicked === "bandBtn") || 
//     (!currentItem.band && buttonClicked === "ikeaBtn");

//     console.log("3")


// const resultMessage = isCorrect ? "Hell YES!" : "Ouch";


// console.log("4")


//     return (
//         <div>
//             <h1>{resultMessage}</h1>
//             <h2>
//                 {currentItem.name}
//             </h2>
//         </div>
//     )
// }