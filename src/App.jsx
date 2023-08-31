import React, { useState  } from "react";
import ReactGA from "react-ga4"
import ModeContext,{lightMode,darkMode} from "./data/ModeContext";
// import {Header, 
//   About,
//   // Skills, 
//   Projects, 
//   Contact ,
//   Footer} from './components/index';

const Header = React.lazy(() => import('./components/Header'))
const About = React.lazy(() => import('./components/About'))
const Projects = React.lazy(() => import('./components/Projects'))
const Contact = React.lazy(() => import('./components/Contact'))
// const Image = React.lazy(() => import('./components/Image'))
const Skills = React.lazy(() => import('./components/Skills'))
const Footer = React.lazy(() => import('./components/Footer'))





  const TRACKING_ID = "G-DJQZ3M266H"
  ReactGA.initialize(TRACKING_ID)

  ReactGA.send({
    hilType:'pageview',
    page:window.location.pathname
  })

 



const App=()=> {
  const [toggelBtn,setToggelBtn]=useState(false);
  const [mode,setMode]=useState({lightMode});
  
 
  const changeMode=()=>{
    setMode(toggelBtn===true?lightMode:darkMode)  
  }
  // getMode function for passing state of Headr cop childe to App cop parent
  const getMode=(e)=>{
    setToggelBtn(e)
    changeMode()
  }




  return (
    <div className="App" style={{...mode.bgColor}}>
      <ModeContext.Provider value={{mode}}>
        <Header modeCourrent={getMode}/>
        {/* testing over image not complet */}
        {/* <Image /> */}
        {/* testing over image not complet */}
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/> 
      </ModeContext.Provider>
    </div>
  );
}

export default App;
