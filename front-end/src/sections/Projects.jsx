import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
import Project from '../components/Project';
import useFetch from "../data/useFetch"
// import {Project_data} from "../data/data";

import ModeContext from '../data/ModeContext';
import { fScrollReveal } from '../effects/index';
const Projects = () => {
  const { mode } = useContext(ModeContext)
  const { data, loading, errorr } = useFetch('https://bakkali.dev/db.json')
  // const { data, loading, errorr } = useFetch('./db.json')

  const [project_data, setProject_data] = useState(data)

  // const [loading,setLoading]=useState(true)
  const [error, setError] = useState(errorr)

  useEffect(() => {
    fScrollReveal('section-title')
    setProject_data(data)
    setError(errorr)
  }, [data, errorr])

  const displayProject = () => {
    return project_data.map((e, key) =>
      // <Project key={key} data={e} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} icon={e.icon} level={e.level} vue={e.vue} />)
      <Project key={key} data={e}/>)
  }

  return (
    <section id="projects" style={{ ...mode.bgColor }} className="mt-0 pt-0">
      <div className="container px-0">
        <div className="project-wrapper">
          <h2 className="section-title " style={{ ...mode.textColor }}>My Projects</h2>

          {loading && <div className="spinner-border " width="3" height="3px" style={{ width: "8rem", height: "8rem", ...mode.textColor }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          }
          {error && <div className='py-3 d-block alert alert-danger  '>
            <h2>{error} : 501</h2>
          </div>
          }
          {(project_data && !error && !loading) && displayProject()}

        </div>
      </div>
    </section>

  )
}

export default Projects