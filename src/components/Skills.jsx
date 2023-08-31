import React, { useContext,useEffect,useState } from 'react';
import ModeContext from '../data/ModeContext';
import Titl from 'react-vanilla-tilt'
import {fScrollReveal} from "../effects/index"
import axios from 'axios';



function Skills() {

  const {mode} = useContext(ModeContext)

  const [icon,setIcon]=useState(null)

  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')
  useEffect(()=>{
    fScrollReveal('section-title')
    const getdata = async()=> {
      // await axios.get('https://yusufbakkali12.github.io/profail-v1/db.json')
      // await axios.get(process.env.REACT_APP_KEY_API_ICONS)
      await axios.get('http://localhost:3000/profail-v1/icons.json')
      .then(e=>setIcon(e.data))
      .catch((e)=>setError(e.message))
      .finally(()=>setLoading(false))
    }
    getdata()
    fScrollReveal('about-wrapper__image','about-wrapper__info')
  },[])


  return (
  //   <section id="" className='skill' style={{...mode.bgColorSuc}}>
  //     <div className="container">
  //       <h2 className="section-title " >Skills && experions </h2>
  //       <div className="row about-wrapper">
  //         <div className="col-md-6 col-sm-12 about-wrapper__image load-hidden">
          
  //           <Titl className="" 
  //             style={{ with:"auto" , padding:1,margin:0}}>
  //             <img
  //               alt="Profile"
  //               className=" shadow-lg  rounded  rounded-1  border-light  "
  //               height="380"
  //               src="./img/profile.jpeg"
  //               type="image"
  //               />
  //           </Titl>
  //         </div>
  //         <div className="col-md-6 col-sm-12">
  //           <div className="about-wrapper__info load-hidden">
  //             <h1 className="about-wrapper__info-text text-start">
  //             I am a full stack junior developer with experience in JavaScript, ReactJS, PHP Laravel, MySQL No-SQL, Bootstrap, Tailwind CSS.
  //             </h1>
  //             <p className="about-wrapper__info-text text-start">
  //             I enjoy engaging in hobbies such as chess, basketball, and football in my free time.
  //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officiis dolore blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa accusamus quasi voluptatibus quisquam libero illum quia laudantium.
  //             </p>
  //             <span className="d-flex mt-3">
  //               <a
  //                 rel="noreferrer"
  //                 target="_blank"
  //                 className="cta-btn cta-btn--resume"
  //                 href="./assets/resume.pdf">
  //                 View Resume
  //               </a>
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //  </section>


  <section id="skills"  style={{...mode.bgColor}}>
    <div className="container ">
      <div className="project-wrapper ">
        <h2 className="section-title " style={{...mode.textColor}}>SKills && experience</h2>
            {/* //! in loading */}
              {loading && 
                        <div className="spinner-border " width="3" height="3px" style={{width:"8rem",height:"8rem",...mode.textColor}}  role="status">
                              <span className="visually-hidden">Loading...</span>
                        </div>
              }
            {/* //! in loading */}
            {error && <div className='py-3 d-block alert alert-danger  '>
                          <h1 className="" style={{...mode.textColor}}>{error}</h1>
                      </div>
            }
            {!loading && <div className='border rounded-2rem m-3 row'>
                      <div className='col-12 col-md-8 p-3  '>
                        <div className=' row container p-0 justify-content-center'>
                          {icon && icon.map((e,index)=>{
                              return(
                                <div key={index} className="  border border-dashed  rounded-18rem  m-2 p-2" style={{width:"9rem"}}>
                                    <div  className="card-img-top  rounded-18rem " style={{fill:e.icon_color,...mode.bgColor}} width='75px'   dangerouslySetInnerHTML={{__html:e.icon_logo}}></div>
                                    <div className="card-bod ">
                                      <h5 className="  fw-bolder my-2 text-lowercase" style={{...mode.textColor}}>{e.icon_name}</h5>
                                      <h6 className=" my-auto text-light fw-bolder px-1 rounded-18rem text-lowercase" style={{backgroundColor:e.level[1]}}>{e.level[0]}</h6>
                                      {/* <p className="card-text"  style={{...mode.textColor}}>{e.icon_name}</p> */}
                                    </div>
                                  </div>
                              )
                          })}
                        </div>
                      </div>
                      <div className='col-md-4 p-3'>
                        <p className="about-wrapper__info-text text-start"  style={{...mode.textColor}}>
                            I enjoy engaging in hobbies such as chess, basketball, and football in my free time.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius ad repellendus saepe, quos qui quod tempore laborum illo consectetur non, sed, amet temporibus quidem eaque ullam pariatur est explicabo accusantium. Quia sunt officiis ipsa suscipit? Sed nulla ut accusantium, possimus eveniet doloremque nostrum, quae harum molestias suscipit error excepturi.
                        </p> 
                      </div>
                    </div>
              }
        

      </div>
    </div>
  </section>)
}

export default Skills