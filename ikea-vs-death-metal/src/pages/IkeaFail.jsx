import { useNavigate } from "react-router-dom"


export default function IkeaFail() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate("/game")
    }

    return (
        <>
            <h1>Nope, it's an ikea product!</h1>
            <button onClick={handleNext} >Next</button> 
        </>
    )
}