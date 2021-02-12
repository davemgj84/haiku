import React, { useEffect, useState } from "react";
import "../styles/Haiku.scss";
import haikus from "../data/haikus";

const Haiku = () => {
  const [selection, setSelection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const findHaiku = () => {
    const index = () => {
      let number = Math.floor(Math.random() * haikus.length);
      return number === currentIndex ? index() : number;
    };
    setCurrentIndex(index());
    setSelection({ ...haikus[currentIndex] });
  };

  return (
    <section className="haiku-container">
      {selection && (
        <div>
          <p>{selection.first}</p>
          <p>{selection.second}</p>
          <p>{selection.third}</p>
          <hr />
          <p className="author"> ~ {selection.author}</p>
        </div>
      )}
      <button onClick={findHaiku}>HAIKU ME!</button>
    </section>
  );
};

export default Haiku;
