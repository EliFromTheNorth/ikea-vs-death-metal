import { useNavigate } from "react-router-dom"

export default function BandCorrect() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate("/game")
    }

    return (
        <>
            <h1>Yes, it's band!</h1>
            <button onClick={handleNext} >Next</button>
        </>
    )
}