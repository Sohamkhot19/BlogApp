import React from 'react'
import './Register.css'
function Register() {
  return (
    <>
<section className="background-radial-gradient overflow-hidden">


  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex:'10'}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color:'hsl(218, 81%, 95%)'}}>
        Unleash Your Creativity, <br />
          <span style={{color:'hsl(218, 81%, 75%)'}}>Share Your Story</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color:'hsl(218, 81%, 85%)'}}>
        Welcome to our blog application, a sanctuary for your thoughts,
         a canvas for your creativity, and a stage for your stories to dance. 
         Here, every word is a brushstroke painting a picture, every post a melody weaving a tale.

         Our platform is a haven where your voice finds wings to soar, where your ideas find roots to grow, and where your stories find hearts to touch. It's a place where connections are forged through shared experiences, where inspiration flows freely, and where passions are kindled and nurtured.
        </p>
      </div>

      <div className="col-lg-5 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div>

        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

              
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

                <div className='d-grid'>
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 d-grid">
                Sign up
              </button>
                </div>
              

              <div className="text-center">
                <p>Already have an account</p>
                <div className='d-grid'>
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 d-grid">
                Sign In
              </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Register