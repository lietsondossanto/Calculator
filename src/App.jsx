import React, { useState } from "react";

import { Header, Basic, Advanced, Programmer } from "./components";

function App() {
  const [mode, setMode] = useState("basic");

  return (
    <>
      <Header mode={setMode} />

      <Basic state={mode == "basic" ? "active" : "disabled"} />
      <Advanced state={mode == "advenced" ? "active" : "disabled"} />
      <Programmer state={mode == "programmer" ? "active" : "disabled"} />
    </>
  );
}

export default App;
