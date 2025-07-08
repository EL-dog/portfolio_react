import React, { useState, useEffect } from 'react';
import './css/typing-text.css';

const TypingText = ({ texts, speed = 100, delay = 2000 }) => {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setCharIndex(0);
        setTextIndex((i) => (i + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, delay]);

  return (
    <h2 className="typing-output">
      {displayed}
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default TypingText;
