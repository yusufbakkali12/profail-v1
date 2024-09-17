import { useContext, useEffect } from "react";
import ModeContext from '../data/ModeContext';
import ReactGA from 'react-ga4'
import { fScrollReveal } from '../effects/index'
import { AiOutlineEye } from "react-icons/ai";
import ImageSwiper from "./ImageSwiper";

// const Project = ({ title, discription, url_see, url_source, url_img, icon, level, vue }) => {
const Project = ({data}) => {
  console.log(data)
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    fScrollReveal('project-wrapper__image', 'project-wrapper__text')
  }, [])
  const handleCLik = (e) => {
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
            <h3 className="project-wrapper__text-title" style={{ ...mode.textColor }}>{data.title} </h3>
            <h6 className="ms-auto p-2 px-3 mt-2 mb-auto text-light fw-bold rounded-2rem " style={{ backgroundColor: data.level[1], width: "max-content" }}>{data.level[0]}</h6>
          </div>
          <div className=" ">
            <p className="my-3" style={{ ...mode.textColor }}>
              {data.discription}
            </p>
            <div className="d-flex mt-3  ">
              {
                data.icon.map((i, index) =>
                  <div key={index} className="text-center p-1">
                    <div style={{ fill: i.icon_color }} dangerouslySetInnerHTML={{ __html: i.icon_logo }}></div>
                    {/* <p  className=" fw-bolder " style={{color:i.icon_color}}>{i.icon_name}</p> */}
                  </div>)
              }
            </div>
            <div className="d-flex pe-4">
              <span className="card-subtitle mb-5 mt-3 fs-4 " style={{ ...mode.textColor }}>22 Aug 2023</span>
              <span className="ms-auto fs-4 " style={{ ...mode.textColor }}><AiOutlineEye /> {data.vue}</span>
            </div>
          </div>
          <div className=" mt-auto">
            <a onClick={handleCLik} rel="noreferrer" target="_blank"
              className="cta-btn cta-btn--hero" href={data.url_see}>
              See Live
            </a>
            <a onClick={handleCLik} rel="noreferrer" target="_blank"
              className="cta-btn text-color-main p-auto" href={data.url_source}>
              Source Code
            </a>
          </div>

        </div>
      </div>
      <div className="col-lg-8 col-sm-12 " style={{ ...mode.bgColor }}>

        <ImageSwiper url_img={data.url_img} />
      </div>
      {/* <hr className="my-5 mx-auto  w-75 " /> */}
    </div>
  )
}

export default Project