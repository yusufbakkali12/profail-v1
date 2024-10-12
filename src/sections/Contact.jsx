import React,{useContext, useState} from 'react'
import ModeContext from '../data/ModeContext';
import axios from 'axios';
import Validation from '../utils/FormValidation'
import toast, { Toaster } from 'react-hot-toast';
import  ReactGA from 'react-ga4';


const Contact = () => {

  
    
  
  const [errer, setErrer]= useState('')
  const [disable, setDisable]= useState(false)
   const [value, setValue]= useState({
    name:'',
    email:'',
    message:''
   })
   const handleInput=(e)=>{
    const newObj={...value, [e.target.name] : e.target.value}
    setValue(newObj)
   }

  const {mode}=useContext(ModeContext);
  const handlSubmait=(e)=>{
    e.preventDefault()
    ReactGA.event({
        category: 'send message',
        action: 'Submait',
        label: 'Submit message',
        value: `name_is :${value.name} email_is :${value.email} message_is :${value.message}`,
       
  })
    setErrer(Validation(value))
    if(Object.keys(Validation(value)).length === 0){
          axios.defaults.headers.post['Content-Type'] = 'application/json';
          axios.post(process.env.REACT_APP_FORMSUBMIT,{
          name: value.name,
          email: value.email,
          message: value.message
        })
          .then(response => {notifysuccess(response.data.message);setDisable(true) })
          .catch(error => {notifyerror(error.data.message)});
          
          setValue({...value,message:''})
    }
  }
  const notifysuccess = (e) => toast.success(e);
  const notifyerror = (e) => toast.error(e);;

  return (
    <section id="contact" style={{...mode.bgColorSuc}}>
      <div className=" mx-sm-auto text-center borderRadius mx-4   w-sm-75 w-lg-50 p-4   mb-4 bg-body   px-md-5" >
        <h2  className="section-title  text-color-main mb-1">Contact</h2>
        <form className='mx-auto ' target="_blank" onSubmit={handlSubmait} >
          <input type="hidden" name='_captcha' value={false} />
          <div className='mb-3'>
            <input onChange={handleInput} name='name' disabled={disable}
            type="text"  placeholder="Full Name"
            className={`form-control form-control-lg w-100 w-sm-50 ${ errer.name && 'is-invalid'}`}/>
            {errer.name && <label  className='text-danger'>{errer.name}</label>}
          </div>
          
          <div className='mb-3'  >
            <input onChange={handleInput} name='email' disabled={disable}
            type="text"  placeholder="Email Address" 
            className={`form-control form-control-lg w-100 w-sm-50 ${ errer.email && 'is-invalid'}`} />
            {errer.email && <label  className='text-danger'>{errer.email}</label>}
            
          </div>

          <div className='mb-3'>
            <textarea onChange={handleInput} type="text" name='message' disabled={disable}
            className={`form-control form-control-lg w-100 ${ errer.message && 'is-invalid'}`} 
            placeholder="Your Message" cols="30" rows="4" ></textarea>
            {errer.message && <label  className='text-danger'>{errer.message}</label>}
          </div> 
          <button type="submit" className='cta-btn cta-btn--hero fs-4 ' disabled={disable} >Send 🚀</button>
        </form>
        
      </div>
        
    <Toaster position="bottom-center"  toastOptions={{duration: 15000}}/>
    </section>
  )
}

export default Contact