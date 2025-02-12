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
      <div>
        <div className="home-container">
               <h1 className="game-title">
                <span className="ikea-header">Ikea</span> <span className="vs">vs</span> <span className="metal-header" data-text="Death Metal">Death Metal</span></h1>
              <button onClick={handleStartGame} className="main-button" role="button"><span className="text">
                 Summon the Game
                   </span></button>
               <div className="home-text">
                <p>
                    If you dare to.
                </p>  
                <p className="sound-info">
                  🎵 This game comes with some epic tunes 🎸
                  <picture>
                    <source media="(min-width: )" srcset="" />
                    <img src="" alt="" />
                  </picture><br />
                  🔊 For maximum enjoyment, make sure your <b>sound is ON</b> or grab some headphones! 🎧✨
                </p>          
               </div>
          </div>

            <svg width="0" height="0">
              <defs>
                <filter id="text-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="1" dy="1" stdDeviation="5" flood-color="#696969" />
                </filter>
              </defs>
            </svg>


        </div>
    )
}



