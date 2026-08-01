import React, { useState, useEffect } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function ScrambleText({ text, className }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let iteration = 0;
    let interval = null;

    // Start empty and slowly reveal
    setDisplayText(text.replace(/./g, " "));

    // Delay start slightly for effect
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " " || letter === "\n") return letter;
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
