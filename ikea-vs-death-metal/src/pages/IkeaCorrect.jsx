import { useNavigate } from "react-router-dom"


export default function IkeaCorrect() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate("/game")
    }

    return (
        <>
            <h1>Yes, it's an ikea product!</h1>
            <button onClick={handleNext} >Next</button>
        </>
    )
}