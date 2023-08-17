import React, { useState } from "react";
import {Header, About,Skills, Projects, Contact ,Footer} from './components/index';
import './index.css';
import ModeContext,{lightMode,darkMode} from "./data/ModeContext";

const App=()=> {
  const [toggelBtn,setToggelBtn]=useState(false);
  const [mode,setMode]=useState({lightMode});
 
  const chageMode=()=>{
    setMode(toggelBtn===true?lightMode:darkMode)  
  }
  // getMode function for passing state of Headr cop childe to App cop parent
  const getMode=(e)=>{
    setToggelBtn(e)
    chageMode()
  }

  return (
    <div className="App" style={{...mode.bgColor}}>
      <ModeContext.Provider value={{mode}}>
        <Header modeCourrent={getMode}/>
        <About/>
        {/* <Skills/> */}
        <Projects/>       
        <Contact/>
        <Footer/>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
