import Intro from "./components/intro/Intro";
import Skill from "./components/skill/Skill";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";


import "./app.scss"
import SideBar from "./components/sideBar/SideBar";
import { useState } from "react";
function App() {
  // show and hide menu 
  const [menuBar , setMenuBar] =useState(false)
  const handleFun = (val)=>{
    setMenuBar(val)
  } 
  return (
    <div className="app">
      <Navbar menuBar={menuBar}  setMenuBar={setMenuBar}/>
      {menuBar && <SideBar handleFun={handleFun}/>}
      <div className="sections">
        <Intro/>
        <Skill/>
        <Portfolio/>
        <Contact/>
        
      </div>

    </div>
  );
}

export default App;