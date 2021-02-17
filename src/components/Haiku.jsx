import React from "react";
import "../styles/Haiku.scss";
import "../styles/responsive/Haiku-Responsive.scss";

const Haiku = (props) => {
  return (
    <section className="haiku">
      <p>{props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
      <hr />
      <div className="author-and-info">
        <p className="author"> ~ {props.author}</p>
        <div className="info-button">
          <i
            onClick={() => props.setShow((prev) => !prev)}
            className="fas fa-info-circle"
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Haiku;
