import React, { useState, useEffect } from "react";

const RandomLetterComponent = ({ name }) => {
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");

  useEffect(() => {
    let intervalId;

    const randomizeFirstLetter = () => {
      const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random ASCII code between 97 ('a') and 122 ('z')
      const randomLetter = String.fromCharCode(randomCharCode);
      setFirstLetter(randomLetter);
    };

    const iterateSecondLetter = () => {
      let count = 0;
      intervalId = setInterval(() => {
        count++;
        if (count <= 10) {
          const letter = name.length > 1 ? name[1] : "";
          setSecondLetter((prevLetter) => prevLetter + letter);
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    };

    randomizeFirstLetter();
    iterateSecondLetter();

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, [name]);

  return (
    <div>
      <p>First Letter: {firstLetter}</p>
      <p>Second Letter: {secondLetter}</p>
    </div>
  );
};

export default RandomLetterComponent;
