import React, { useState } from "react";
import "../styles/Haiku.scss";

const Haiku = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <section className="haiku-container">
        <div>
          <p>A huge frog and I</p>
          <p>staring at each other</p>
          <p>neither of us moves</p>
        </div>
        <button>HAIKU ME!</button>
      </section>
    );
  } else {
    return (
      <section className="haiku-container">
        <button onClick={() => setShow(true)}>HAIKU ME!</button>
      </section>
    );
  }
};

export default Haiku;
