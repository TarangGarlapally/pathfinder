import React, { createContext, useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";

export let CursorContext = createContext();
export let SlocContext = createContext();
export let DlocContext = createContext();
function App() {

  const [cursorState, setCursorState] = useState("source");
  const [sloc,setSloc] = useState("");
  const [dloc, setDloc] = useState("");
  return (
    <CursorContext.Provider value = {{cursorState, setCursorState}}>
    <SlocContext.Provider value = {{sloc, setSloc}}>
    <DlocContext.Provider value = {{dloc, setDloc}}>
    <div className="App">
      <Header />
      <Grid />
    </div>
    </DlocContext.Provider>
    </SlocContext.Provider>
    </CursorContext.Provider>
  );
}

export default App;
