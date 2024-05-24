import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/sessionActions';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data);
      sessionStorage.setItem('username', formData.username);
      console.log('Stored username:', sessionStorage.getItem('username')); // Check storage
      dispatch(login({ username: formData.username }));
      navigate('/Home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <>
    <section className="vh-100" style={{backgroundColor:'#3C5B6F'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius:'1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.pexels.com/photos/3197390/pexels-photo-3197390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="login form" className="img-fluid" style={{borderRadius:'1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleLogin}>

                  <div className="d-flex align-items-center mb-5 pb-1">
                    <img src="../logo.png" alt="" height={48} width={48}/>
                    <span className="h1 fw-bold mb-0 mx-3">Blog & Blog</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px',fontSize:'25px'}}>Sign into your account</h5>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" name='username' onChange={handleChange} id="form2Example17" className="form-control form-control-lg" placeholder='Username' />

                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" name='password' onChange={handleChange} id="form2Example27" className="form-control form-control-lg" placeholder='Password' />

                  </div>

                  <div className="pt-1 mb-4 d-grid">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a className="text-muted" style={{textDecoration:'none',fontSize:'18px'}} href="/">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color:'#151515',fontSize:'19px',}}>Don't have an account? <a href="/Register"
                      style={{color:'#0E46A3',textDecoration:'none',fontSize:'19px'}}>Register here</a></p>
                  <a href="/" className="text-muted no-underline" style={{textDecoration:'none',fontSize:'18px'}}>Terms of use.</a>
                  <a href="#!" className="extra-large text-muted" style={{textDecoration:'none',fontSize:'18px'}}>Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login