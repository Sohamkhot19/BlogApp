//home.js
import React, { useEffect, useState } from 'react';
import useUsername from '../useusername';
import axios from 'axios';
import Navbar from './Navbar';
import Blogcard from './Blogcard';
import { Circles } from 'react-loader-spinner';

function Home() {
  const username = useUsername();
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        console.log(response.data)
        setBlogs(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false); // Ensure loading is stopped even if there's an error
      }
    };

    fetchBlogs();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setLoading(true); // Set loading to true when category changes
    setTimeout(() => {
      setLoading(false); // Simulate data fetching delay for filtered data
    }, 500); // Adjust the delay as needed
  };
// console.log("blogs dates:",blogs)
  const filteredBlogs = selectedCategory === 'All Categories' ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <>
      <Navbar/>
      {
        username ? (
          <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
            <strong>Login Successful !!</strong> Welcome {username}.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        ) : (
          <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
            <strong>Login Unsuccessful !!</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
      
      <div className="hero-section text-center bg-image" style={{ backgroundImage: "url('https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
  <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <div className="d-flex justify-content-center align-items-center h-100 px-4 px-md-5 py-5">
      <div className="text-white">
        <h1 className="mb-4 display-4"> Welcome to Blog & Blog</h1>
        <h4 className="mb-4 fs-5">Your personal space to share ideas, stories, and connect with like-minded individuals. Start your blogging journey today and let your voice be heard!
          Join our community of passionate bloggers. It's easy and free to get started!
        </h4>
        <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="/CreateBlog" role="button"><i className="bi bi-pencil-square"></i> Create Blog</a>
      </div>
    </div>
  </div>
</div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h5>Select your category to read blogs</h5>
            <table className="table">
              <tbody>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('All Categories')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer'}}>All Categories</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' ,background:'#2A629A'}}>
                    <a onClick={() => handleCategoryChange('music')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer' }}>Music</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('movie')} style={{ textDecoration: 'none', color: 'white'  ,cursor:'pointer'}}>Movies</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px', background:'#2A629A'}}>
                    <a onClick={() => handleCategoryChange('technical')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer' }}>Technical</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('fashion')} style={{ textDecoration: 'none', color: 'white',cursor:'pointer'}}>Fashion</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('business')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer'}}>Business</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' ,background:'#2A629A'}}>
                    <a onClick={() => handleCategoryChange('fitness')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer' }}>Fitness</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('travel')} style={{ textDecoration: 'none', color: 'white'  ,cursor:'pointer'}}>Travel</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px', background:'#2A629A'}}>
                    <a onClick={() => handleCategoryChange('food')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer' }}>Food</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('sports')} style={{ textDecoration: 'none', color: 'white',cursor:'pointer'}}>Sports</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('finance')} style={{ textDecoration: 'none', color: 'white'  ,cursor:'pointer'}}>Financial</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px', background:'#2A629A'}}>
                    <a onClick={() => handleCategoryChange('personal')} style={{ textDecoration: 'none', color: 'white' ,cursor:'pointer' }}>Personal</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px',background:'#2A629A' }}>
                    <a onClick={() => handleCategoryChange('politics')} style={{ textDecoration: 'none', color: 'white',cursor:'pointer'}}>Political</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a className="btn btn-lg text-center" href="/CreateBlog" role="button" style={{ background: '#003285', marginLeft: '50px',color:'white',border:'0.1px solid white' }}> Create Blog</a>
          </div>

          <div className="col-md-9">
            <div className="row">
              {loading ? (
                <div className=" d-flex justify-content-center align-items-center" style={{marginTop:'25%'}}>
                  <Circles
                    height="80"
                    width="80"
                    color="#2A629A"
                    ariaLabel="circles-loading"
                    visible={true}
                  />
                </div>
              ) : (
                <>
                  {filteredBlogs.length === 0 ? (
                    <div className="text-center d-flex justify-content-center align-items-center" style={{marginTop:'25%'}}>
                      <h2>No blogs available</h2>
                    </div>
                  ) : (
                    filteredBlogs.map((blog) => (
                      <Blogcard
                        key={blog._id}
                        _id={blog._id}
                        thumbnail={blog.thumbnail}
                        title={blog.title}
                        category={blog.category}
                        content={blog.content}
                        username={blog.username}
                        createdat={blog.createdAt}
                      />
                    ))
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
