import React,{ useContext,useEffect} from 'react';
import ModeContext from '../data/ModeContext';
import {fScrollReveal} from '../effects/index'
const Header = ({modeCourrent}) => {
  const {mode}=useContext(ModeContext);
  const hendlChange=(e)=>{
    modeCourrent(e.target.checked)
  }
  useEffect(()=>{
    fScrollReveal('hero-title','hero-cta')
  },[])

  return (
    <section id="hero" className="jumbotron" style={{...mode.bgColor}} >
      <div id='about_nav' className='fixed-top bg-ligh' style={{...mode.bgColorSuc}}>
        <nav className='p-2 d-flex ms-lg-5'>
          <div className='me-auto '>
            <a rel="noreferrer" className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#about">About</a>
            <a className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#projects">Projects</a>
            <a className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#contact">Contact</a>
          </div>
            <label className="switch">
                <input type="checkbox" onChange={hendlChange} id="btn_chec"/>
                <span className="slider round"></span>
            </label>
        </nav>
      </div>
      <div className="container" >
        <h1 className="hero-title  load-hidden" style={{...mode.textColor}}  >
            Hi, my name is <span className="text-color-main">Bakkali Youssef</span>👋
            <br />
            I'm  <span className="text-color-main">Full stck</span> Developer.
        </h1>
        <p className="hero-cta load-hidden" >
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">Know more</a>
        </p>
      </div>
    </section>
  )
}

export default Header;