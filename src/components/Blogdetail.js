import React from 'react'
import Navbar from './Navbar'
import useUsername from '../useusername'

function Blogdetail() {
  const username=useUsername();
  return (
    <>
    <Navbar/>
    <div className="container">

          <div className="text-center mb-4">
            <img src='../defaultimg.webp' alt="Thumbnail" className="img-fluid" width="650px" />
            <h1 className='mt-4'>this is title of blog by {username}</h1>

            
          </div>
          <div style={{justifyContent:"space-between",display:'flex'}}>
          <span style={{display:'inline-block'}}>Author: Username</span>
          <span style={{display:'inline-block'}}>wed 20 aug,2020</span>
          </div>
          
          <textarea
          readOnly
            className="form-control"
            name="content"
            style={{ height: '500px', padding: '10px', fontSize: '16px', marginBottom: '14px' }}
            value={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quos nemo, fugit inventore aperiam molestias accusantium quidem minima quod tempora asperiores, molestiae eius voluptates quaerat veritatis consequuntur necessitatibus deserunt tenetur.'}
          ></textarea>

<h3>comments</h3>
<div className="d-flex justify-content-between align-items-center mb-4">

            <label htmlFor="thumbnailInput" className="btn btn-outline-primary d-flex align-items-center p-2" style={{ fontSize: '12px', backgroundColor: '#7AB2B2', borderRadius: '50%' }}>
              <i className="bi bi-person" style={{ fontSize: '25px' }}></i>
            </label>

            <div className="input-group mb-3 my-4 w-100">
            <input 
              type="text" 
              className="form-control mx-3" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default" 
              placeholder="Write your comment"
              name="title"
            />
          </div>


            <button 
              type="submit"
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#7AB2B2' }}
            >
              Post
            </button>
          </div>

      </div>
    </>
  )
}

export default Blogdetail