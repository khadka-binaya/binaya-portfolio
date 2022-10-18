import React from "react";
import "./App.css";
import "./styles/Global.css";
// import "rsuite/dist/styles/rsuite-default.css";
import Intro from "./components/Intro";
import About from "./components/About";
import SidebarNav from "./components/SidebarNav";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <About />
      </div>
      <SidebarNav></SidebarNav>
    </div>
  );
}

export default App;