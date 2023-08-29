import React,{useContext, useState , useEffect} from 'react';
import axios from 'axios';
import Project from './Project';
// import {Project_data} from "../data/data";

import ModeContext from '../data/ModeContext';
import {fScrollReveal} from '../effects/index';
const Projects = () => {
  const {mode}=useContext(ModeContext)

  const [project_data,setProject_data]=useState(null)

  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')
  useEffect(()=>{
    fScrollReveal('section-title')
    const getdata = async()=> {
      await axios.get('https://yusufbakkali12.github.io/profail-v1/db.json')
      // await axios.get(process.env.REACT_APP_KEY_API2)
      .then(e=>setProject_data(e.data))
      .catch((e)=>setError(e.message))
      .finally(()=>setLoading(false))
    }
    getdata()
  },[])


  return (
    <section id="projects" style={{...mode.bgColor}}>
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title " style={{...mode.textColor}}>Projects</h2>
        
          {loading && <div className="spinner-border " width="3" height="3px" style={{width:"8rem",height:"8rem",...mode.textColor}}  role="status">
                          <span className="visually-hidden">Loading...</span>
                    </div>
            }
            {error && <div className='py-3 d-block alert alert-danger  '>
                <h1 className="" style={{...mode.textColor}}>{error}</h1>
            </div>
            }
          { project_data && project_data.map(e=>{ return <Project key={e._id} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} icon={e.icon} level={e.level} />})}


          
          {/* { Project_data && Project_data.map(e=>{ return <Project key={e.id} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} />})} */}

            {/* <div className='mt-5'>
              <button className='btn border rounded-circle fs-2'>👈</button>
              <button className='btn border rounded-circle fs-2 '>👉</button>
            </div> */}
        </div>
      </div>
    </section>

  )
}

export default Projects