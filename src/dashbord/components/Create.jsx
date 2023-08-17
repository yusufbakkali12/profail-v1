import axios from 'axios';
import React, { useState } from 'react'
import DropZone from './create/DropZone'
const Create = () => {
  const [img,setImg]=useState('');
  // const {getInputProps, getRootProps ,open} = useDropzone({noClick: true});


  // const handelImges=(e)=>{
  //   setImg(e.target.files[0])
  // }
  const handelSubmit=(e)=>{
    e.preventDefault();
    const url="http://localhost:8080/dashbord/create";
    const data= new FormData();
    data.append('images',img)
    axios.post(url,data).then(res=>{
      console.log(res);
    })
  }

  return (
    <div className="bg-body-tertiary p-5 rounded mt-3 h-100" data-bs-spy="scroll">
      <div className="">
        <h4 className="mb-3 fw-bold">Build Project</h4>
        <form onSubmit={handelSubmit} className="needs-validation" method='post' encType='metadata' >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Title</label>
              <input type="text" className="form-control" id="firstName" placeholder="Title"/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>


            <div className="col-6">
              <label htmlFor="username" className="form-label">Discription</label>
              <div className="input-group has-validation">
                <textarea type="text" className="form-control " id="Discription" placeholder="Discription" />
              <div className="invalid-feedback">
                  Your Discription is required.
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="Url_code_Cource" className="form-label">Url code Source</label>
              <input type="text" className="form-control" id="Url_code_Cource" placeholder="Url code Cource" />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="Url_See_Live" className="form-label">Url See Live</label>
              <input type="text" className="form-control  url" id="Url_See_Live" placeholder="Url See Live"/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-sm-12">
            <label htmlFor="Url_See_Live" className="form-label">Images</label>
              <DropZone/>
              
          
            </div>
          </div>

          <button className="btn btn-primary mt-3" type="submit">Add Project</button>
          <button className="btn btn-danger ms-2 mt-3" type="rest">Cancel</button>
        </form>
        
      </div>
      
    
    </div>
  )
}
export default Create;