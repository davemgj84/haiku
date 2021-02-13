import React, { useState } from "react";
import "../styles/Haiku.scss";

const Haiku = (props) => {
  return (
    <div className="haiku">
      <p>{props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
      <hr />
      <p className="author"> ~ {props.author}</p>
    </div>
  );
};

export default Haiku;
