import React from "react";
import {Routes,Route} from "react-router-dom";
import Homepage  from "./pages/Homepage";
import Projects  from "./pages/Projects";
import Contact  from "./pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/Projects" exact element={<Projects />}/>
        <Route path="/Contact" exact element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
