import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useUsername from '../useusername';
function Navbar() {
  const navigate = useNavigate();
  const handlelogout=()=>{
    // Clear session data
    sessionStorage.removeItem('username');
    // Redirect to login page
    navigate('/');
  }
  const username=useUsername();
  return (
    <>
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'transparent',borderBottom:'1px solid white' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold',color:'white' }}>
            <img src="../icon-2.png" alt="icon" className='mx-2' height='64px' width={'60px'} style={{borderRadius:'50%'}}/>
            Blog & Blog
          </a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between d-flex w-50 text-dark" style={{ marginLeft: '100px', fontSize: '18px' }}>
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="/Home" style={{color:'white'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Myblogs" style={{color:'white'}}>My Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About" style={{color:'white'}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cursor-pointer" onClick={handlelogout} href='/' style={{color:'white'}}>Logout</a>
              </li>
            </ul>
            <h5>Hello {username}</h5>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar