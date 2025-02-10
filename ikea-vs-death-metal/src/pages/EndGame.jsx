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
        <div className="end-game-page">
        <div className="end-game">
            <Confetti />
            <h1>Game Over</h1>
            <div className="score">
                <h3>SCORE</h3>
                <h2>{score}/{data.length}</h2>
            </div>
            <h3>{comment}</h3>
            <button className="main-button" onClick={handlePlayAgain}><span className="text" role="button">Play again</span></button>
            <footer className="contact-icons">
                <div className="image-wrapper">                    
                    <a href="https://github.com/elifromthenorth" target="_blank" rel="noopener noreferrer">
                        <img src="/images/GitHub.png" className="contact-icon" alt="GitHub Profile"/>
                    </a>
                </div>
                <div  className="image-wrapper">
                    <a href="https://www.linkedin.com/in/eliska-knop-kostkova/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/LinkedIn.png"  className="contact-icon" alt="LinkedIn Profile"/>
                    </a>
                </div>
            </footer>
        </div>
        </div>
    )
}



// todo:
// fix CSS
// comment in the end game in typing animation?
//some nice styling - frame around the score
// ikea picture - link to the product??
