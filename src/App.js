import React, { useState } from "react";
import HaikuContainer from "./components/HaikuContainer";
import Banner from "./components/Banner";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <HaikuContainer setShow={setShow} />
      <Banner show={show} setShow={setShow} />
    </div>
  );
};

export default App;
