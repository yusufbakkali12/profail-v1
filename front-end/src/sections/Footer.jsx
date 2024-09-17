import React from 'react'
// import ModeContext from '../data/ModeContext';

const Footer = () => {
  // const {mode}=useContext(ModeContext)
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links ">
         
          <div className="footer__text">
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-twitter fa-inverse"></i>
              <p style={{fontSize:"12px",paddingTop:"0.5rem"}}>Twitter</p> 
            </a>
          </div>
          <div className="footer__text">
            <a rel="noreferrer" href="https://www.linkedin.com/in/bakysf" target="_blank">
              <i className="fa fa-linkedin fa-inverse"></i>
              <p style={{fontSize:"12px",paddingTop:"0.5rem"}} >Linkedin</p> 
            </a>
          </div>
          <div className="footer__text">
            <a rel="noreferrer" href="https://facebook.com/bakysf" target="_blank">
              <i className="fa fa-facebook fa-inverse"></i>
              <p style={{fontSize:"12px",paddingTop:"0.5rem"}}>Facebook</p> 
            </a>
          </div>
          <div className="footer__text">
            <a rel="noreferrer" href="https://github.com/bakkaliYoussef" target="_blank">
              <i className="fa fa-github fa-inverse "></i>
              <p style={{fontSize:"12px",paddingTop:"0.5rem"}}>github</p> 
            </a>
          </div>
          
        </div>
        <hr />
        <p className="footer__text">© 2023 - Template developed by <a rel="noreferrer" href="https://github.com/bakkaliYoussef" target="_blank">Bakkali Youssef</a></p>  
      </div>
    </footer>
  )
}

export default Footer;