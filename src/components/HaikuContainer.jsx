import React, { useEffect, useState } from "react";
import Haiku from "./Haiku";
import "../styles/HaikuContainer.scss";
import haikus from "../data/haikus";

const HaikuContainer = () => {
  const [selection, setSelection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const findHaiku = () => {
    const index = () => {
      const number = Math.floor(Math.random() * haikus.length);
      return number === currentIndex ? index() : number;
    };
    setCurrentIndex(index());
    setSelection({ ...haikus[currentIndex] });
  };

  return (
    <section className="haiku-container">
      {selection && (
        <Haiku
          first={selection.first}
          second={selection.second}
          third={selection.third}
          author={selection.author}
        />
      )}
      <button onClick={findHaiku}>HAIKU ME!</button>
    </section>
  );
};

export default HaikuContainer;
