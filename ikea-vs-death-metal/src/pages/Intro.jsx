import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        navigate('/home');
      }
    };

    const handleClick = () => {
      navigate('/home');
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);

    };
  }, [navigate]);
  
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, []);
  
  const enterText = isMobile ? "tap anywhere" : "press ENTER"


  const text = `Deep in the dark Scandinavian forest, where legends are forged in fire and ice, words take on a life of their own. Some echo through the abyss of death metal, others rest upon the altars of IKEA. Fifteen titles will be revealed to you. Only by trusting your instincts can you uncover their true origins. But beware—appearances can be deceiving. Choose wisely.`;

  const wrapWordsInSpans = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.5}s` }}>
        {word}{' '}
      </span>
    ));
  };


  

  return (
    <div className="intro-container">
      <p className="intro-text">
        {wrapWordsInSpans(text)}
      </p>
      <p className="text-enter">
        {wrapWordsInSpans(`Brace yourself… then ${enterText}`)}
      </p>
    </div>
  );
}
