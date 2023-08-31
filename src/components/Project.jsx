import React,{useContext, useEffect} from "react";
import ModeContext from '../data/ModeContext';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Titl from 'react-vanilla-tilt'
import ReactGA from 'react-ga4'
import {fScrollReveal} from '../effects/index'

const Project = ({title,discription,url_see,url_source,url_img,icon,level}) => {
  
  const {mode}=useContext(ModeContext);

  useEffect(()=>{
    fScrollReveal('project-wrapper__image','project-wrapper__text')
  },[])
  const handleCLik=(e)=>{
    ReactGA.event({
      category: e.target.text,
      action: e.target.text,
      label: 'SEE URL',
      value: e.target.href,
})

  }

  return (
    <div className="row my-3 border rounded-2rem p-2 pb-4 p-md-4">
    <div className="col-lg-4 col-sm-12 p-2">
      <div className="project-wrapper__text load-hidden" >
        <div className="d-flex" >
          <h3 className="project-wrapper__text-title"  style={{...mode.textColor}}>{title} </h3>
          <h6 className="ms-auto p-2 px-3 mt-2 mb-auto text-light fw-bold rounded-2rem " style={{backgroundColor:level[1],width:"max-content"}}>{level[0]}</h6>
        </div>
        <div className=" ">
          <p className="my-3" style={{...mode.textColor}}>
                {discription}    
          </p>
          <div className="d-flex mt-3  ">
                {
                  icon.map((i,index)=> 
                      <div key={index} className="text-center p-1">
                        <div style={{fill:i.icon_color}} dangerouslySetInnerHTML={{__html:i.icon_logo}}></div>
                            {/* <p  className=" fw-bolder " style={{color:i.icon_color}}>{i.icon_name}</p> */}
                      </div>)
                }
          </div>
          <h6 className="card-subtitle mb-5 mt-3 " style={{...mode.textColor}}>22 Aug 2023</h6>
        </div>
        <div className=" mt-auto">
          <a onClick={handleCLik} rel="noreferrer" target="_blank"
          className="cta-btn cta-btn--hero" href={url_see}>
            See Live
          </a>
          <a onClick={handleCLik} rel="noreferrer" target="_blank" 
          className="cta-btn text-color-main p-auto" href={url_source}>
            Source Code
          </a>
        </div>
        
      </div>
    </div>
    <div className="col-lg-8 col-sm-12 " style={{...mode.bgColor}}>
      <div className="project-wrapper__image load-hidden " >
        {/* <a rel="noreferrer" href={url_see} target="_blank"> */}
        <Titl options={{  max: 4  , 'max-glare': 0.5 }} style={{ with:"auto" , padding:0,margin:0 }} className="thumbnail border-0 rounded-2rem  " >
        
              <Swiper zoom={true} pagination={{dynamicBullets: true,}} modules={[Pagination]} 
                    className="mySwiper border-dark border-2 border-sm-3 border rounded-2rem " style={{backgroundColor:"#eef5ff"}}>
                      
                    {url_img.map((url_one_img,index)=>
                     <SwiperSlide key={index} className=''> 
                        <img  alt="Project Image1" loading="lazy" className="img-fluid  m-0" src={url_one_img} /> 
                      </SwiperSlide>
                     )}     
              </Swiper>
        </Titl>
        {/* </a> */}
      </div>
    </div>
    {/* <hr className="my-5 mx-auto  w-75 " /> */}
  </div>
  )
}

export default Project