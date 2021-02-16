import React, { useState } from "react";
import "../styles/Banner.scss";

const Banner = (props) => {
  if (props.show) {
    return (
      <section className="banner-box">
        <i
          onClick={() => props.setShow(false)}
          className="far fa-times-circle"
        ></i>
        <h2>TESTING</h2>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Banner;
