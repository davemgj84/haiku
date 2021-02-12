import React from "react";
import "../styles/Haiku.scss";

const Haiku = () => {
  return (
    <section className="haiku-container">
      <div>
        <p>A huge frog and I</p>
        <p>staring at each other</p>
        <p>neither of us moves</p>
      </div>
      <button>HAIKU</button>
    </section>
  );
};

export default Haiku;
