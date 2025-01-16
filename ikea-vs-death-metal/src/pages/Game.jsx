import { useNavigate } from "react-router-dom"
import data from "../data/data"

export default function Game() {

  console.log(data)

    // const names = data.map(item => item)
    // console.log(names)

    // const guess = names[Math.floor(Math.random() * names.length)]
    // console.log(guess)

    // const lala = Math.floor(Math.random() * data.length)
    // console.log(lala)

    const oneObject = data[Math.floor(Math.random() * data.length)]
    console.log(oneObject)

    const navigate = useNavigate()

    const handleIkeaBag = () => {
      oneObject.band ? navigate("/bandFail") : navigate("/ikeaCorrect")
    }

    const handleMetalBtn = () => {
      oneObject.band ? navigate("/bandCorrect") : navigate("/ikeaFail")
    }

    return (
        <div>
          <h1>{oneObject.name}</h1>
          <button onClick={handleIkeaBag}>
            <img src="/images/71cQiE5yR2L._AC_SL1239_.jpg" alt="" width ="200"/>
          </button>
          <button onClick={handleMetalBtn}>
            <img src="/images/b7f4b4b8-06f9-4ee9-bebf-15ed222e19e9.jpg" alt="" width ="200"/>
          </button>

        </div>
      );
}

