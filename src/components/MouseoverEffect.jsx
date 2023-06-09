import { useState } from "react";
import { useEffect } from "react";

const MouseoverEffect = () => {
  // State variables
  const [name, setName] = useState("Rohit"); // Assuming 'name' corresponds to
  useEffect(() => {
    const tag = document.querySelector("h1");
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const handleMouseOver = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        setName((prevName) => {
          const updatedName = prevName
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return prevName[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          return updatedName;
        });

        iteration += 1 / 3;
        if (iteration >= 13) {
          clearInterval(interval);
        }
      }, 50);
    };

    tag.addEventListener("mouseover", handleMouseOver);

    return () => {
      tag.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <h1>{name}</h1>;
};

export default MouseoverEffect;
