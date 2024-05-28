import React, { useState, useEffect } from 'react';
import useUsername from '../useusername';
import Navbar from './Navbar';
import axios from 'axios';
import Blogcard from './Blogcard';

function Myblogs() {
  const username = useUsername();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog => blog.username === username);

  return (
    <>
      <Navbar />
      <div className="container my-5 col-md-9">
        <h1 className='text-center mb-4'>My Blogs</h1>
        {filteredBlogs.length > 0 ? (
          <div className="row">
            {filteredBlogs.map(blog => (
                <Blogcard
                  _id={blog._id}
                  thumbnail={blog.thumbnail}
                  title={blog.title}
                  category={blog.category}
                  content={blog.content}
                  username={blog.username}
                  createdat={blog.createdAt}
                />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 style={{color:'GrayText'}}>No blogs Yet Created</h3>
            <a data-mdb-ripple-init className="btn btn-dark btn-lg mt-5" href="/CreateBlog" role="button"><i className="bi bi-pencil-square"></i> Create Blog</a>
          </div>
        )}
      </div>
    </>
  );
}

export default Myblogs;