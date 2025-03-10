import React, { useState  } from "react";
import ReactGA from "react-ga4"
import img from './img/photoProfail1.jpg';

import ModeContext,{lightMode,darkMode} from "./data/ModeContext";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import {
  Header, 
  About,
  
  // Skills, 
  // Projects, 
  Contact ,
  Footer} from './sections/index';

// const Header = React.lazy(() => import('./sections/Header'));
// const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
// const Contact = React.lazy(() => import('./sections/Contact'));
const Skills = React.lazy(() => import('./sections/Skills'));
// const Footer = React.lazy(() => import('./sections/Footer'));
// const Image = React.lazy(() => import('./components/Image'))











// !! GOOGLE ANALITIC

  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID ;
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
    <div className="App " style={{...mode.bgColor}}>
      <ModeContext.Provider value={{mode}}>
        <Header modeCourrent={getMode}/>
        {/* <Image />testing over image not complet */}
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        <FloatingWhatsApp phoneNumber={process.env.REACT_APP_PHONE_NUMBER} avatar={img} accountName="Bakkali Youssef" darkMode={toggelBtn} />
      </ModeContext.Provider>
    </div>
  );
}

export default App;
