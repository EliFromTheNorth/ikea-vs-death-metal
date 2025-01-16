import { useNavigate } from "react-router-dom"


export default function BandFail() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate("/game")
    }
    return (
        <>
            <h1>nope, it's a band!</h1>
            <button onClick={handleNext} >Next</button> 
        </>
    )
}


