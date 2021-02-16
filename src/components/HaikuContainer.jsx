import React, { useEffect, useState } from "react";
import Haiku from "./Haiku";
import "../styles/HaikuContainer.scss";
import haikuArray from "../data/haikuArray";

const HaikuContainer = (props) => {
  const [selection, setSelection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const findHaiku = () => {
    const index = () => {
      const number = Math.floor(Math.random() * haikuArray.length);
      return number === currentIndex ? index() : number;
    };
    setCurrentIndex(index());
    setSelection({ ...haikuArray[currentIndex] });
  };

  return (
    <section className="haiku-container">
      {selection && (
        <Haiku
          first={selection.first}
          second={selection.second}
          third={selection.third}
          author={selection.author}
          setShow={props.setShow}
        />
      )}
      <button onClick={findHaiku}>HAIKU ME!</button>
    </section>
  );
};

export default HaikuContainer;
