import {useNavigate} from "react-router-dom"


export default function Home() {
    const navigate = useNavigate()

    const handleStartGame = () => {
      navigate("/game")
    }

    return (
        <>
               <h1>Ikea vs Death Metal</h1>
               <div className="button-start">
                 <button onClick={handleStartGame}>
                   Start Game
                 </button>
                <p>
                    If you dare to!
                </p>               
               </div>
        </>
    )
}

