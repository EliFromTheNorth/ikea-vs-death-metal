import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export default function Intro() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        navigate('/home');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);
  
    return (
      <div>
        {/* <div className="home-container"> */}
                <p>Deep in the dark Scandinavian forest, where legends are forged in fire and ice, words take on a life of their own. Some echo through the abyss of death metal, others rest upon the altars of IKEA.

                    Fifteen titles will be revealed to you. Only by trusting your instincts can you uncover their true origins.

                        But beware—appearances can be deceiving. Choose wisely. Press ENTER to continue.
                </p>
          {/* </div> */}
        </div>
    )
}



