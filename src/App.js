import React, { useState } from "react";
import HaikuContainer from "./components/HaikuContainer";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <HaikuContainer show={show} setShow={setShow} />
    </div>
  );
};

export default App;
