import { createContext } from "react";
export const lightMode={
  textColor:{color: '#272341'},
  textColorSucundry:{color: '#272341'},
  bgColor:{backgroundColor: `white`},
}; 
export const darkMode={
  textColor:{color: 'white'},
  bgColor:{backgroundColor: '#333333'},
  bgColorSuc:{backgroundImage: `linear-gradient(135deg, #090716 0%, #272341 100%)`}
}
const ModeContext=createContext(null);
export default ModeContext