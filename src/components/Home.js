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

  const filteredBlogs = selectedCategory === 'All Categories'
    ? blogs
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
      
      <div className="text-center bg-image" style={{ backgroundImage: "url('https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: '500px', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '500px' }}>
          <div className="d-flex mx-5 p-5 h-100" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="text-white">
              <h1 className="mb-4"> Welcome to Blog & Blog</h1>
              <h4 className="mb-4">Your personal space to share ideas, stories, and connect with like-minded individuals. Start your blogging journey today and let your voice be heard!
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
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <a onClick={() => handleCategoryChange('All Categories')} style={{ textDecoration: 'none', color: 'black' }}>All Categories</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <a onClick={() => handleCategoryChange('music')} style={{ textDecoration: 'none', color: 'black' }}>Music</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <a onClick={() => handleCategoryChange('movie')} style={{ textDecoration: 'none', color: 'black' }}>Movies</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <a onClick={() => handleCategoryChange('technical')} style={{ textDecoration: 'none', color: 'black' }}>Technical</a>
                  </td>
                </tr>
                <tr className='table-light'>
                  <td className='table-light text-center' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <a onClick={() => handleCategoryChange('fashion')} style={{ textDecoration: 'none', color: 'black' }}>Fashion</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a className="btn btn-lg text-center" href="/CreateBlog" role="button" style={{ background: '#4D869C', marginLeft: '50px' }}> Create Blog</a>
          </div>

          <div className="col-md-9">
            <div className="row">
              {loading ? (
                <div className="loader d-flex" style={{justifyContent:'center',alignItems:'center'}}>
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
                    <div className="text-center">
                      <h2>No blogs available</h2>
                    </div>
                  ) : (
                    filteredBlogs.map((blog) => (
                      <Blogcard
                        key={blog._id}
                        thumbnail={blog.thumbnail}
                        title={blog.title}
                        category={blog.category}
                        content={blog.content}
                        username={blog.username}
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
