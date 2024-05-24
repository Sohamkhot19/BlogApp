//createblog.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useUsername from '../useusername';

function Createblog() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    thumbnail: '../defaultimg.webp',
  });
  
  const [thumbnailPreview, setThumbnailPreview] = useState('../defaultimg.webp');
  const username=useUsername();

  // const isLoggedIn = useSelector(state => state.session.isLoggedIn);
  // const user = useSelector(state => state.session.user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        thumbnail: file,
      });
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      console.error('User is not logged in');
      alert('User is not logged in');
      return;
    }
    const data = new FormData();
    data.append('title', formData.title);
    data.append('username', username);
    data.append('category', formData.category);
    data.append('content', formData.content);
    if (formData.thumbnail) {
      data.append('thumbnail', formData.thumbnail);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Blog published successfully!');
    } catch (error) {
      console.error('Error publishing blog:', error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>hello {username}</h1>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <img src={thumbnailPreview} alt="Thumbnail" className="img-fluid" width="650px" />
          </div>

          <div className="input-group mb-3 my-4 w-100">
            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
            <input 
              type="text" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default" 
              placeholder="Enter blog title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <input type="file" onChange={handleThumbnailChange} style={{ display: 'none' }} id="thumbnailInput" />
            <label htmlFor="thumbnailInput" className="btn btn-outline-primary d-flex align-items-center p-2" style={{ fontSize: '12px', backgroundColor: '#7AB2B2', borderRadius: '25%' }}>
              <i className="bi bi-camera" style={{ fontSize: '25px' }}></i>
            </label>

            <select
              className="form-select flex-grow-1 mx-3"
              aria-label="Default select example"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              style={{ padding: '10px', fontSize: '16px' }}
            >
              <option value="" disabled>Select Blog Category</option>
              <option value="music">Music</option>
              <option value="movie">Movie</option>
              <option value="technical">Technical</option>
              <option value="fashion">Fashion</option>
            </select>

            <button 
              type="submit"
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#7AB2B2' }}
            >
              Publish
            </button>
          </div>

          <textarea
            className="form-control"
            placeholder="Write your blog here..."
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            style={{ height: '300px', padding: '10px', fontSize: '16px', marginBottom: '14px' }}
          />
        </form>
      </div>
    </>
  );
}

export default Createblog;
