import React, { useContext, useEffect, useState } from 'react';
import ModeContext from '../data/ModeContext';
import { fScrollReveal } from '../effects/index'
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { Route } from '../Routers/Routers';
import { CgClose } from 'react-icons/cg';
import ReactGA from 'react-ga4';

const Header = ({ modeCourrent }) => {
  const { mode } = useContext(ModeContext);
  const hendlChange = (e) => { modeCourrent(e.target.checked) }
  const [show, setShow] = useState('collapse')
  useEffect(() => {
    fScrollReveal('hero-title', 'hero-cta')
  }, [])
  const handelMore = () => {
    ReactGA.event({
      category: 'Know more',
      action: 'click',
      label: 'Know more',
      value: 'null',
    })
  }
  return (
    <section id="hero" className="jumbotron bg-img" style={{ ...mode.bgColor }}>
      <div id='about_nav' className='fixed-top bg-ligh shadow' style={{ ...mode.bgColorSuc }}>
        <nav className='p-2 ms-lg-5 navbar navbar-expand-sm '>
          <button className="navbar-toggler btn m-1" type="button" onClick={() => { show !== 'collapse' ? setShow('collapse') : setShow('show') }} style={{ ...mode.textColor }}>
            {show !== 'collapse' ? <CgClose className='fs-1 text-light' /> : <HiBars3BottomLeft className='fs-1 text-light' />}
          </button>
          <div className='collapse navbar-collapse mb-2 ' >
            {Route.map((e, index) =>
              <a key={index} className="mx-4 fw-bolder border-bottom border-light text-light" href={e.url}>{e.lable}</a>
            )}
          </div>
          <label className="ms-auto switch">
            <input type="checkbox" onChange={hendlChange} id="btn_chec" />
            <span className="slider round"></span>
          </label>
          <div className={` ${show} border-bottom border-2 my-2 py-4 `}    >
            {Route.map((e, index) =>
              <a key={index} className="mx-4 fw-bolder d-inline-block border-bottom border-light text-light" href={e.url}>{e.lable}</a>
            )}
          </div>
        </nav>
      </div>
      <div className="container" >
        <h1 className="hero-title  load-hidden" style={{ ...mode.textColor }}  >
          Hi, my name is <span className="text-color-main">Bakkali Youssef</span>👋
          <br />
          I'm  <span className="text-color-main">Full Stack</span> Developer.
        </h1>
        <p className="hero-cta load-hidden " >
          <a rel="noreferrer" onClick={handelMore} className="cta-btn cta-btn--hero"
            //  overflow-hidden  border-3  rounded-18rem
            //  style={{border: "1px solid #00cdac!important"}}
            href="#about">Know more</a>
        </p>
      </div>
    </section>
  )
}

export default Header;