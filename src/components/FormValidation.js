

const Validation = (e) => {
  const errer={};
  const email_pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // const name_pattern=/^[a-zA-Z]{2.20}$/;
  // const message_pattern=/^[a-zA-Z]{3.30}$/;

  if(e.name===''){
    errer.name='Name is Required!'
  }else if(e.name.langth < 3){
    errer.name="Name did'nt match";
  }
 
  if(e.email==='' ){
    errer.email='Email is Required!'
  }else if(!email_pattern.test(e.email)){
    errer.email="Email did'nt match";
  }
  if(e.message==='' ){
    errer.message='Message is Required!'
  }else if(e.name.langth < 3){
    errer.message="Message did'nt match";
  }

    return errer ;
}

export default Validation