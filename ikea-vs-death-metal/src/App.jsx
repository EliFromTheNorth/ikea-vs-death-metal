import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/home"
import Game from "./pages/game"
import EndGame from "./pages/endGame"
import Verdict from "./pages/verdict"
import Fog from "./components/Fog";


function App() {
    return (
      <div>
          <Fog />
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path="/game" element={<Game />} />
            <Route path="/endGame" element={<EndGame />} />
            <Route path="/verdict" element={<Verdict />} />
          </Routes>
      </div>
    )
  }
  
  export default App











// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Ikea vs Death Metal</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count issss {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more Death metaaaaaaaal
//       </p>
//     </>
//   )
// }

// export default App
