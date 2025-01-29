import {useNavigate} from "react-router-dom"

import data from "../data/data"


function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}



export default function Home() {
  const navigate = useNavigate()
  
  const handleStartGame = () => {
      const shuffledData = shuffleArray(data)
      navigate("/game", { state: { shuffledData } })
    }

    return (
        <div className="home-container">
               <h1 className="game-title"><span className="ikea-header">Ikea</span> <span className="vs">vs</span> Death Metal</h1>
               <div className="button-start">
                 <button onClick={handleStartGame} className="button-64" role="button"><span class="text">
                   Start Game
                   </span></button>
                <p>
                    If you dare to.
                </p>  
                <br />
                <br />
                <br />   
                <p>
                  🎵 This game comes with some epic tunes 🎸
                  <picture>
                    <source media="(min-width: )" srcset="" />
                    <img src="" alt="" />
                  </picture><br />
                  🔊 For maximum enjoyment, make sure your <b>sound is ON</b> or grab some headphones! 🎧✨
                </p>          
               </div>
        </div>
    )
}
