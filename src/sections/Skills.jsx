import React, { useContext,useEffect,useState } from 'react';
import ModeContext from '../data/ModeContext';
import {fScrollReveal} from "../effects/index"
import useFetch from "../data/useFetch"

function Skills() {
  const {mode} = useContext(ModeContext)
  const {data ,loading,errorr}=useFetch(process.env.REACT_APP_API_ICONS);
  const [icon,setIcon]=useState(data)
  // const [loading,setLoading]=useState(true)
  const [error,setError]=useState(errorr)
  useEffect(()=>{
    fScrollReveal('about-wrapper__image','about-wrapper__info')
    fScrollReveal('section-title')
   
  },[])
useEffect(()=>{
  setIcon(data)
  setError(errorr)
},[data,errorr])
  const displaySkilles=()=>{
   return( icon.map((e,index)=>{
      return(
        <div key={index} className="  border border-dashed  rounded-18rem  m-1 py-3 " style={{width:"8.2rem"}}>
            <div  className="card-img-top   rounded-18rem " style={{fill:e.icon_color,...mode.bgColor}} width='65px'   dangerouslySetInnerHTML={{__html:e.icon_logo}}></div>
            <div className="card-bod mt-1  ">
              <h5 className="card-text  fw-bolder my-2 text-lowercase text-capitalize  text-truncate" style={{...mode.textColor}}>{e.icon_name}</h5>
              <small className="my-auto text-light fw-bolder px-2 py-1 rounded-18rem  text-uppercase" style={{backgroundColor:e.level[1]}}>{e.level[0]}</small>
              {/* <p className="card-text"  style={{...mode.textColor}}>{e.icon_name}</p> */}
            </div>
        </div>
      )
  })) 
  }

  return (

  <section id="skills"   style={{...mode.bgColor}}>
    <div className="container px-0">
      <div className="project-wrapper ">
        <h2 className="section-title " style={{...mode.textColor}}>SKills && experience</h2>
            {/* //! in loading */}
              {loading && <div className="spinner-border " width="3" height="3px" style={{width:"8rem",height:"8rem",...mode.textColor}}  role="status">
                              <span className="visually-hidden">Loading...</span>
                        </div>
              }
            {/* //! in loading */}
            {error && <div className='py-3 d-block alert alert-danger  '>
                          <h2>{error} : 501</h2>
                          <h2>You can see my profaile githube: <a className=' alert-danger' href="https://github.com/bakkaliYoussef">https://github.com/bakkaliYoussef</a> </h2>
                      </div>
            }
            {( !error && !loading ) && <div className='border rounded-2rem my-3 row'>
                      <div className='col-12 col-md-8 '>
                        <div className=' row container p-0 pt-3 mx-auto justify-content-center'>
                        {displaySkilles()}
                        </div>
                      </div>
                      <div className='col-md-4 p-3'>
                        <p className="p-3 about-wrapper__info-text text-start"  style={{...mode.textColor}}> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ad repellendus saepe, quos qui quod tempore laborum illo consectetur non, sed, amet temporibus quidem eaque ullam pariatur est explicabo accusantium. 
                        </p> 
                      </div>
                    </div>
              }
      </div>
    </div>
  </section>)
}

export default Skills