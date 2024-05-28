import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUsername from '../useusername';
import { formatDistanceToNow } from 'date-fns';

function Blogdetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editableContent, setEditableContent] = useState('');
  const username = useUsername();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
        setEditableContent(response.data.content); 
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:5000/api/comments/${id}`, {
        username,
        content: newComment,
      });
      setNewComment('');
      const response = await axios.get(`http://localhost:5000/api/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleUpdateBlog = async () => {
    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, {
        content: editableContent,
      });
      alert('Blog updated successfully');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update the blog. Please try again.');
    }
  };
  
  const handleDeleteBlog = async () => {
    try {
      console.log({id})
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      navigate('/Home'); // Redirect to home after deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  const isAuthor = username === blog.username;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center mb-4">
          <img src={`http://localhost:5000${blog.thumbnail}`} alt="Thumbnail" className="img-fluid" width="650px" />
          <h1 className="mt-4">{blog.title}</h1>
        </div>
        <div style={{ justifyContent: "space-between", display: 'flex' }}>
          <span style={{fontSize:'18px'}}>Author: {blog.username}</span>
          <span style={{fontSize:'18px'}}>{new Date(blog.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</span>
        </div>
        {isAuthor && (
          <div className="d-flex justify-content-end mt-1">
            <button className="btn btn-warning mx-2" onClick={handleUpdateBlog}>Update Blog</button>
            <button className="btn btn-danger" onClick={handleDeleteBlog}>Delete</button>
          </div>
        )}
        <textarea
  className="form-control mt-2 white-placeholder bg-transparent"
  name="content"
  style={{ height: '500px', padding: '10px', fontSize: '16px', marginBottom: '14px',color:'white' }}
  value={editableContent}
  onChange={(e) => setEditableContent(e.target.value)} // Handle changes in textarea
></textarea>

        <h3>Comments</h3>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input 
            type="text" 
            className="form-control mx-3 white-placeholder bg-transparent" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            placeholder="Write your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button 
            type="submit"
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#003285' }}
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>

        {comments.map((comment) => (
          <div key={comment._id} className="mb-2 p-2" style={{backgroundColor:'#577B8D', borderRadius:'15px'}}>
            <img src="../blogimg.webp" className='mx-2' alt="" height="50px" width='50px' style={{ borderRadius: '50%' }} />
            <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <strong style={{ fontSize: '18px' }}>{comment.username}</strong>
              <br />
              <span style={{ fontSize: '12px' }}>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</span>
            </div>
            <p className='mx-5 mt-2'>{comment.content}</p>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Blogdetail;
