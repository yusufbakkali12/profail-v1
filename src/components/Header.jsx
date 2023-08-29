import React,{ useContext,useEffect} from 'react';
import ModeContext from '../data/ModeContext';
import {fScrollReveal} from '../effects/index'
import {HiBars3} from 'react-icons/hi2';
import {GrClose} from 'react-icons/gr';
import { useState } from 'react';
import ReactGA from 'react-ga4';
const Header = ({modeCourrent}) => {
  const {mode}=useContext(ModeContext);
  const hendlChange=(e)=>{ modeCourrent(e.target.checked)}
  const [show ,setShow ] =useState('collapse')
  useEffect(()=>{
    fScrollReveal('hero-title','hero-cta')
  },[])
const handelMore=()=>{
  
    ReactGA.event({
      category: 'Know more',
      action: 'click',
      label: 'Know more',
      value: 'null',
     
})
  }



  return (
    <section id="hero" className="jumbotron" style={{...mode.bgColor}} >
      <div id='about_nav' className='fixed-top bg-ligh' style={{...mode.bgColorSuc}}>
      
        <nav className='p-2 ms-lg-5 navbar navbar-expand-sm'>
          <button className="navbar-toggler btn m-1" type="button" onClick={()=> { show!=='collapse'? setShow('collapse') :setShow('show')}} style={{...mode.textColor}}>
          { show!=='collapse'? <GrClose  className='fs-1' style={{...mode.textColor}}/> :<HiBars3  className='fs-1' style={{...mode.textColor}}/>  }  
          </button>
         
          
          <div className='collapse navbar-collapse mb-2' >
            <a className="mx-4 fw-bolder border-bottom border-light text-light" href="#about">About</a>
            <a className="mx-3 fw-bolder  border-bottom border-light text-light" href="#projects">Projects</a>
            <a className="mx-3 fw-bolder  border-bottom border-light text-light" href="#projects">Skills</a>
            <a className="mx-3 fw-bolder  border-bottom border-light text-light" href="#contact">Contact Me</a>
          </div>
          <label className="ms-auto switch">
                <input type="checkbox" onChange={hendlChange} id="btn_chec"/>
                <span className="slider round"></span>
          </label>
          <div className={`${show} vh-10 py-2  position-relative border-bottom border-2 `}    >
            <a rel="noreferrer" className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#about">About</a>
            <a className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#projects">Projects</a>
            <a className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#projects">Skills</a>
            <a className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href="#contact">Contact Me</a>
           
          </div>
      
         
        </nav>



      </div>
      <div className="container" >
        <h1 className="hero-title  load-hidden" style={{...mode.textColor}}  >
            Hi, my name is <span className="text-color-main">Bakkali Youssef</span>👋
            <br />
            I'm  <span className="text-color-main">Full stck</span> Developer.
        </h1>
        <p className="hero-cta load-hidden" >
            <a rel="noreferrer" onClick={handelMore} className="cta-btn cta-btn--hero" href="#about">Know more</a>
        </p>
      </div>
    </section>
  )
}

export default Header;