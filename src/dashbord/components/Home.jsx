import React from 'react'

const Home = () => {
  return (
    <div className="bg-body-tertiary p-5 rounded mt-3" data-bs-spy="scroll">
    <div className="">
      <h4 className="mb-3 fw-bold">Home</h4>
      <form className="needs-validation" novalidate="">
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">Title</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>


          <div className="col-6">
            <label for="username" className="form-label">Discription</label>
            <div className="input-group has-validation">
              <textarea type="text" className="form-control " id="username" placeholder="Discription" required=""/>
            <div className="invalid-feedback">
                Your Discription is required.
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <label for="firstName" className="form-label">Url code Cource</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">Url See Live</label>
            <input type="text" className="form-control  url" id="lastName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div className="col-md-3">
            <label for="zip" className="form-label">Images</label>
            <input type="file" className="form-control"  placeholder="" required=""/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <button className="btn btn-primary mt-3" type="submit">Add Project</button>
        <button className="btn btn-danger ms-2 mt-3" type="rest">Cancel</button>
      </form>
    </div>
      

    <p className="lead ms-3">
      This example is a quick exercise to illustrate how the bottom
      navbar works.
    </p>
  
  </div>
  )
}

export default Home