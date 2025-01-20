import { useNavigate } from "react-router-dom"


export default function EndGame() {
    const navigate = useNavigate()

    const handlePlayAgain = () => {
        navigate("/")
    }

    return (
        <>
            <h1>Game Over</h1>
            <h2>Your Score: *under construction*</h2>
            <button onClick={ handlePlayAgain }>Play again</button>
        </>
    )
}