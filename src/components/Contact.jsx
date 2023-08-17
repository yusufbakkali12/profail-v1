import React,{useContext} from 'react'
import ModeContext from '../data/ModeContext';

  const Contact = () => {
  const {mode}=useContext(ModeContext);
  return (
    <section id="contact" style={{...mode.bgColorSuc}}>
      <div className="container text-center borderRadius p-4 mb-4 bg-body w-100 w-sm-50  px-md-5" >
        <h2  className="section-title  text-color-main mb-1">Contact</h2>
          <div className='mx-auto px-5'>
            {/* <div className=''> */}
              <label htmlFor="" className=" form-label">Name</label>
              <input type="text" placeholder='Name' className=' form-control form-control-lg  w-100 w-sm-50 mb-3 ' />
            {/* </div> */}
           
            <label htmlFor="">Email</label>
            <input type="text" placeholder='email' className=' form-control form-control-lg w-100 w-sm-50 mb-3' />
            <label htmlFor="" className=''>Comments</label>
            <textarea type="text" className=' form-control form-control-lg mb-3 w-100  ' name="" placeholder='comments' cols="30" rows="4"></textarea>
            <button className='cta-btn cta-btn--hero fs-4 '>Submait</button>
          </div>
        
      </div>
      <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume "
            href="mailto:example@email.com">Call to Action</a>
    </section>
  )
}

export default Contact