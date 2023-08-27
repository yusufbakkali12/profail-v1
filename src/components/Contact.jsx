import React,{useContext, useState} from 'react'
import ModeContext from '../data/ModeContext';
import axios from 'axios';
import Validation from './FormValidation'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  const [errer, setErrer]= useState('')
  // const [notification, setNotification]= useState('')
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
    setErrer(Validation(value))
    if(Object.keys(Validation(value)).length === 0){
          axios.defaults.headers.post['Content-Type'] = 'application/json';
          axios.post('https://formsubmit.co/ajax/bakkali1998yf@gmail.com', {
          name: value.name,
          email: value.email,
          message: value.message
        })
          .then(response => {notifysuccess(response.data.message) })
          .catch(error => {notifyerror(error.data.message)});
          
          setValue({...value,message:''})
    }
  }
  const notifysuccess = (e) => toast.success(e);
  const notifyerror = (e) => toast.error(e);;

  return (
    <section id="contact" style={{...mode.bgColorSuc}}>
      <div className="container text-center borderRadius p-4 mb-4 bg-body w-100 w-sm-50  px-md-5" >
        <h2  className="section-title  text-color-main mb-1">Contact</h2>
        <form className='mx-auto px-5' target="_blank" onSubmit={handlSubmait} >
          <input type="hidden" name='_captcha' value={false} />
          <div className='mb-3'>
            <input onChange={handleInput} name='name' 
            type="text"  placeholder="Full Name"
            className={`form-control form-control-lg w-100 w-sm-50 ${ errer.name && 'is-invalid'}`}/>
            {errer.name && <label  className='text-danger'>{errer.name}</label>}
          </div>
          
          <div className='mb-3'  >
            <input onChange={handleInput} name='email' 
            type="text"  placeholder="Email Address" 
            className={`form-control form-control-lg w-100 w-sm-50 ${ errer.email && 'is-invalid'}`} />
            {errer.email && <label  className='text-danger'>{errer.email}</label>}
            
          </div>

          <div className='mb-3'>
            <textarea onChange={handleInput} type="text" name='message'
            className={`form-control form-control-lg w-100 ${ errer.message && 'is-invalid'}`} 
            placeholder="Your Message" cols="30" rows="4" ></textarea>
            {errer.message && <label  className='text-danger'>{errer.message}</label>}
          </div> 
          <button type="submit" className='cta-btn cta-btn--hero fs-4 '>Submait</button>
        </form>
        
      </div>
        

    <Toaster position="bottom-center"  toastOptions={{duration: 10000}}/>
    </section>
  )
}

export default Contact