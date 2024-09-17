import { createContext } from "react";
export const lightMode={
    textColor:{
      color: '#272341'
    },
    textColorSucundry:{
      color: '#272341'
    },
    bgColor:{
      backgroundColor: `white`
    },
    bgTras:{
      transition: '2s all ease-in-out'
    },
}; 
export const darkMode={
    textColor:{
      color: 'white',
      fill:'white'
    },
    bgColor:{
      backgroundColor: '#333333'
    },
    bgTras:{
      transition: '.5s all ease-in-out'
    },
    bgColorSuc:{
      backgroundImage: `linear-gradient(135deg, #090716 0%, #272341 100%) `
    }
}
const ModeContext=createContext(null);
export default ModeContext