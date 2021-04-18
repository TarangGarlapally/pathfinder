import React, { createContext, useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";

export let CursorContext = createContext();

function App() {

  const [cursorState, setCursorState] = useState("blank");

  return (
    <CursorContext.Provider value = {{cursorState, setCursorState}}>
    <div className="App">
      <Header />
      <Grid />
    </div>
    </CursorContext.Provider>
  );
}

export default App;
