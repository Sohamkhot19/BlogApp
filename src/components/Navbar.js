import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" style={{ backgroundColor: '#3C5B6F' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            <img src="../icon-2.png" alt="icon" height='64px' width={'60px'} />
            Blog & Blog
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between d-flex w-50 text-dark" style={{ marginLeft: '100px', fontSize: '18px' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar