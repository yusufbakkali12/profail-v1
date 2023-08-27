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
      // await axios.get('http://localhost:3000/profail-v1/db.json')
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
          { project_data && project_data.map(e=>{ return <Project key={e._id} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} />})}


          
          {/* { Project_data && Project_data.map(e=>{ return <Project key={e.id} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} />})} */}

        </div>
      </div>
    </section>

  )
}

export default Projects