import { Pagination } from "swiper/modules";
import Titl from 'react-vanilla-tilt'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const ImageSwiper = ({url_img}) => {
  return (
    <div className="project-wrapper__image load-hidden " >
    {/* <a rel="noreferrer" href={url_see} target="_blank"> */}
    <Titl options={{  max: 4  , 'max-glare': 0.5 }} style={{ with:"auto" , padding:0,margin:0 }} className="thumbnail border-0 rounded-2rem  " >
    
          <Swiper zoom={true} pagination={{dynamicBullets: true,}} modules={[Pagination]} 
                className="mySwiper border-dark border-2 border-sm-3 border rounded-2rem " style={{backgroundColor:"#eef5ff"}}>
                {url_img.map((url_one_img,index)=>
                 <SwiperSlide key={index} className=''> 
                    <img  alt="Project Image1"  className="img-fluid  m-0" src={url_one_img} /> 
                  </SwiperSlide>
                 )}     
          </Swiper>
    </Titl>
    {/* </a> */}
  </div>
  )
}

export default ImageSwiper