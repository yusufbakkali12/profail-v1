import React, { useContext,useEffect } from 'react';
import ModeContext from '../data/ModeContext';
import Titl from 'react-vanilla-tilt'
import ReactGA from 'react-ga4'
import {fScrollReveal} from "../effects/index"




function About() {

  const {mode} = useContext(ModeContext)
  useEffect(()=>{
    fScrollReveal('about-wrapper__image','about-wrapper__info')
  },[])
  const downloadCV=()=>{
    ReactGA.event({
      category: 'downlad',
      action: 'click',
      label: 'download CV',
      value: 'null',
     
})
  }



  return (
    <section id="about" style={{...mode.bgColorSuc}}>
      <div className="container">
        <h2 className="section-title " >About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-4 col-sm-12 about-wrapper__image load-hidden">
            <Titl className="rounded rounded-4 border border-5 w-auto p-0" >
              <img
                alt="Profile"
                className=" shadow-lg    border-light  "
                height="400"
                src="./img/profile.jpeg"
                type="image"
                />
            </Titl>
         
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <h1 className="about-wrapper__info-text text-start">
              I am a full stack junior developer with experience in JavaScript, ReactJS, PHP Laravel, MySQL No-SQL, Bootstrap, Tailwindcss.
              </h1>
              <p className="about-wrapper__info-text text-start">
              I enjoy engaging in hobbies such as chess, basketball, and football in my free time.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ad repellendus saepe, quos qui quod tempore laborum illo consectetur non, sed, amet temporibus quidem eaque ullam pariatur est explicabo accusantium. Quia sunt officiis ipsa suscipit? Sed nulla ut accusantium, possimus eveniet doloremque nostrum, quae harum molestias suscipit error excepturi.
             
              </p> 
        
              <span  className="d-flex mt-3">
                <a
                  onClick={downloadCV}
                  rel="noreferrer"
                  target="_blank"
                  download="bakkali_youssef_CV"
                  className="cta-btn cta-btn--resume"
                  href="./img/CV_BAKKALI_YOUSSEF.pdf">
                  Download CV 📑
                </a>
              </span>

            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default About