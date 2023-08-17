import React, { useContext,useEffect } from 'react';
import ModeContext from '../data/ModeContext';
import Titl from 'react-vanilla-tilt'
import {fScrollReveal} from "../effects/index"




function Skills() {

  const {mode} = useContext(ModeContext)
  useEffect(()=>{
    fScrollReveal('about-wrapper__image','about-wrapper__info')
  },[])



  return (
    <section id="" className='skill' style={{...mode.bgColorSuc}}>
      <div className="container">
        <h2 className="section-title " >My Skills</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12 about-wrapper__image load-hidden">
          
            <Titl className="" 
              style={{ with:"auto" , padding:1,margin:0}}>
              <img
                alt="Profile"
                className=" shadow-lg  rounded  rounded-1  border-light  "
                height="380"
                src="./img/profile.jpeg"
                type="image"
                />
            </Titl>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <h1 className="about-wrapper__info-text text-start">
              I am a full stack junior developer with experience in JavaScript, ReactJS, PHP Laravel, MySQL No-SQL, Bootstrap, Tailwind CSS.
              </h1>
              <p className="about-wrapper__info-text text-start">
              I enjoy engaging in hobbies such as chess, basketball, and football in my free time.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officiis dolore blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa accusamus quasi voluptatibus quisquam libero illum quia laudantium.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="./assets/resume.pdf">
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Skills