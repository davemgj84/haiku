import React, { useEffect, useState } from "react";
import Haiku from "./Haiku";
import Banner from "./Banner";
import "../styles/HaikuContainer.scss";
import "../styles/responsive/HaikuContainer-Responsive.scss";
import haikuArray from "../data/haikuArray";

const HaikuContainer = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selection, setSelection] = useState(null);

  const shuffle = (input) => [...input].sort(() => 0.5 - Math.random());

  useEffect(() => {
    if (currentIndex === 0) {
      setDataArray(shuffle(haikuArray));
    }
  }, [currentIndex]);

  const nextHaiku = () => {
    setCurrentIndex((currentIndex + 1) % dataArray.length);
    setSelection({ ...dataArray[currentIndex] });
  };

  // This works to give me random selections, but they will repeat at times:

  // const findHaiku = () => {
  //   const index = () => {
  //     const number = Math.floor(Math.random() * haikuArray.length);
  //     return number === currentIndex ? index() : number;
  //   };
  //   setCurrentIndex(index());
  //   setSelection({ ...haikuArray[currentIndex] });
  // };

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
      <button onClick={nextHaiku}>俳 Haiku</button>
      <Banner show={props.show} setShow={props.setShow} />
    </section>
  );
};

export default HaikuContainer;
