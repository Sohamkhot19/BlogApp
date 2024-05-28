import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import useUsername from '../useusername';
import './Createblog.css';

function Createblog() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    thumbnail: '../defaultimg.webp',
  });

  const [thumbnailPreview, setThumbnailPreview] = useState('../defaultimg.webp');
  const username = useUsername();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        thumbnail: file,
      });
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        thumbnail: '../defaultimg.webp',
      });
      setThumbnailPreview('../defaultimg.webp');
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
    data.append('thumbnail', formData.thumbnail);

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
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <img src={thumbnailPreview} alt="Thumbnail" className="img-fluid" width="650px" />
          </div>

          <div className="input-group mb-3 my-4 w-100">
            <span className="input-group-text" id="inputGroup-sizing-default" style={{background:'#003285', color:'white'}}>Title</span>
            <input 
              type="text" 
              className="form-control white-placeholder" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default" 
              placeholder="Enter blog title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              style={{backgroundColor:'transparent',color:'white'}}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <input type="file" onChange={handleThumbnailChange} style={{ display: 'none' }} id="thumbnailInput" />
            <label htmlFor="thumbnailInput" className="btn btn-outline-primary d-flex align-items-center p-2" style={{ fontSize: '12px', color:'white',backgroundColor: '#003285', borderRadius: '25%' }}>
              <i className="bi bi-camera" style={{ fontSize: '25px' }}></i>
            </label>

            <select
              className="form-select flex-grow-1 mx-3"
              aria-label="Default select example"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              style={{ padding: '10px', fontSize: '16px',backgroundColor:'transparent',color:'white' }}
            >
              <option value="" disabled  style={{backgroundColor:'transparent',color:'black'}}>Select Blog Category</option>
              <option value="music" style={{backgroundColor:'transparent',color:'black'}}>Music</option>
              <option value="movie" style={{backgroundColor:'transparent',color:'black'}}>Movie</option>
              <option value="technical" style={{backgroundColor:'transparent',color:'black'}}>Technical</option>
              <option value="fashion" style={{backgroundColor:'transparent',color:'black'}}>Fashion</option>
              <option value="business" style={{backgroundColor:'transparent',color:'black'}}>Business</option>
              <option value="travel" style={{backgroundColor:'transparent',color:'black'}}>Travel</option>
              <option value="fitness" style={{backgroundColor:'transparent',color:'black'}}>Fitness</option>
              <option value="food" style={{backgroundColor:'transparent',color:'black'}}>Food</option>
              <option value="sports" style={{backgroundColor:'transparent',color:'black'}}>Sports</option>
              <option value="finance" style={{backgroundColor:'transparent',color:'black'}}>Finance</option>
              <option value="personal" style={{backgroundColor:'transparent',color:'black'}}>Personal</option>
              <option value="political" style={{backgroundColor:'transparent',color:'black'}}>Political</option>
            </select>

            <button 
              type="submit"
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#003285' }}
            >
              Publish
            </button>
          </div>

          <textarea
            className="form-control white-placeholder"
            placeholder="Write your blog here..."
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            style={{ height: '300px', padding: '10px', fontSize: '16px', marginBottom: '14px',backgroundColor:'transparent',color:'white','::placeholder':{color:'white'} }}
          />
        </form>
      </div>
    </>
  );
}

export default Createblog;
