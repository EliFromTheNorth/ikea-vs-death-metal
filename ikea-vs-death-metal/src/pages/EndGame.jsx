import { useNavigate, useLocation } from "react-router-dom"
import data from "../data/data"
import Confetti from "../components/confetti"


export default function EndGame({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { score } = location.state || {}

    
    // const finalScore = score
    console.log("end score is: ", score)
    
    const handlePlayAgain = () => {
        navigate("/")
    }

    return (
        <>
            <Confetti />
            <h1>Game Over</h1>
            <h2>Your Score: {score}/{data.length}</h2>
            <button onClick={ handlePlayAgain }>Play again</button>
        </>
    )
}