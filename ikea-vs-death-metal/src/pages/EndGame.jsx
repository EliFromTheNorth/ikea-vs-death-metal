import { useNavigate, useLocation } from "react-router-dom"
import data from "../data/data"
import Confetti from "../components/confetti"


export default function EndGame({state}) {
    const navigate = useNavigate()
    const location = useLocation()

    const { score } = location.state || {}
    
    const handlePlayAgain = () => {
        navigate("/")
    }

    let comment = ""
    switch(true) {
        case score < 4:
            comment = "Omg, you should really visit Sweden"
            break
        case score < 8:
            comment = "Getting there... but not quite there yet!"
            break
        case score < 12:
            comment = "You’ve got the basics down, but there's room for more metal!"
            break
        case score < 15:
            comment = "You're almost there... One with the metal gods!"
            break;
        default:
            comment = "You're a true death metal fan! Headbang your way to glory!"
            break
    }

    return (
        <>
            <Confetti />
            <h1>Game Over</h1>
            <h2>{comment}</h2>
            <h2>Your Score: {score}/{data.length}</h2>
            <button onClick={ handlePlayAgain } className="button-start">Play again</button>
        </>
    )
}