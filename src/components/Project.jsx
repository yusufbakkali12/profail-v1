import React,{useContext, useEffect} from "react";
// Import Swiper React components
import ModeContext from '../data/ModeContext';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Titl from 'react-vanilla-tilt'

import {fScrollReveal} from '../effects/index'

const Project = ({title,discription,url_see,url_source,url_img}) => {
  const {mode}=useContext(ModeContext);

  useEffect(()=>{
    fScrollReveal('project-wrapper__image','project-wrapper__text')
  },[])

  return (
    <div className="row my-3">
    <div className="col-lg-4 col-sm-12 ">
      <div className="project-wrapper__text load-hidden">
        <h3 className="project-wrapper__text-title" style={{...mode.textColor}}>{title}  </h3>
        <div>
          <p className="mb-4" style={{...mode.textColor}}>
                {discription}    
          </p>
        </div>
        <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero" href={url_see}>
          See Live
        </a>
        <a rel="noreferrer" target="_blank" className="cta-btn text-color-main" href={url_source}>
          Source Code
        </a>
      </div>
    </div>
    <div className="col-lg-8 col-sm-12">
      <div className="project-wrapper__image load-hidden" >
        {/* <a rel="noreferrer" href={url_see} target="_blank"> */}
        <Titl options={{  max: 4 , glare:true ,"max-glare": 0.5 }} style={{ with:"auto" , padding:0,margin:0}} className="thumbnail rounded" >
          
              <Swiper  pagination={{dynamicBullets: true,}} modules={[Pagination]} className="mySwiper" style={{backgroundColor:"#eef5ff"}}>
                    {url_img.map((url_one_img,index)=>
                     <SwiperSlide key={index} > 
                        <img  alt="Project Image1" className="img-fluid m-0" src={url_one_img} />
                      </SwiperSlide>
                     )}     
              </Swiper>
        </Titl>
        {/* </a> */}
      </div>
    </div>
    <hr className="my-5 mx-auto  w-75 " />
  </div>
  )
}

export default Project