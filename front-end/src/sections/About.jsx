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
            <Titl className="rounded-2rem border-0 w-auto p-0" >
              <img
                alt="Profile"
                loading='lazy'
                className=" shadow-lg  border-dark border-2 border rounded-2rem "
                height="400"
                src="./img/photoProfail.jpeg"
                type="image"
                />
            </Titl>
         
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              {/* <h1 className="about-wrapper__info-text text-start">
                I am a full stack junior developer with experience in JavaScript, ReactJS, PHP Laravel, MySQL No-SQL, Bootstrap, Tailwindcss.
              </h1> */}
              <div className="about-wrapper__info-text text-start">
                  <p>
                  I enjoy creating things that live on the internet whether that be websites application or anything in between My goal is to always build products that provide perfect , performance experiences.
                  </p>
                  <p>
                  familiarity with Full Stack intermediate level programming such as HTML CSS ReactJS ,and JSON server side coding skills Node js and Php Frameworks(Express js Laravel).
                  </p>
                  {/* <p>
                      Understanding of data structures algorithms including data migration, transformation and analysis Deploying ,managing ,and operating scalable highly available and fault tolerant on AWS,
                  </p> */}
                  <p>
                    Excellent communication skills
                  </p>
              </div> 
        
              <span  className="d-flex mt-3">
                <a
                  onClick={downloadCV}
                  rel="noreferrer"
                  target="_blank"
                  download="bakkali_youssef_CV"
                  className="cta-btn cta-btn--resume"
                  href="./CV_BAKKALI_YOUSSEF.pdf">
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