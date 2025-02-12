import { useEffect, useState } from "react"

import ReactConfetti from "react-confetti"

export default function Confetti() {
    const confettiColors = ['#006AA7', '#FECC02'];
    // const confettiColors = ['#450606', '#000000', '#696969'];
    
    const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

    const detectSize = () => {
        setWindowDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])


    return (
        <div>
            <ReactConfetti 
                width={windowDimension.width}
                height={windowDimension.height}
                colors={confettiColors}
            />
        </div>
    )
}