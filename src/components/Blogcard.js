import React from "react";
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';


function Blogcard(props,{_id}) {

    const formattedDate = new Date(props.createdat).toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  
    const formattedTime = new Date(props.createdat).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    const categoryBadgeClasses = {
      music: 'badge text-bg-danger',
      technical: 'badge text-bg-success',
      fashion: 'badge text-bg-warning',
      movie: 'badge text-bg-primary',
      fitness: 'badge text-bg-danger',
      travel: 'badge text-bg-success',
      food: 'badge text-bg-warning',
      business: 'badge text-bg-primary',
      financial: 'badge text-bg-danger',
      personal: 'badge text-bg-success',
      sports: 'badge text-bg-warning',
      political: 'badge text-bg-primary',
      // Add more categories as needed
    };
  
    const badgeClass = categoryBadgeClasses[props.category.toLowerCase()] || 'badge text-bg-secondary';
  return (
    <>
      <div className="col-md-4">
      <Link to={`/blog/${props._id}`} style={{textDecoration:'none'}}>
        <div className="card mb-4">
          
        {props.thumbnail && (
                  <img src={`http://localhost:5000${props.thumbnail}`} className="card-img-top" alt="Thumbnail" height="250px" width="250px"/>
                )}
          <div className="card-body">
          <span className={badgeClass} style={{marginBottom:'15px'}}>{props.category}</span>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.content.substring(0,50)}...
            </p>
            <div className="d-flex">
            <img src="../blogimg.webp" alt="" width='50px' height='50px' style={{borderRadius:'50%'}}/>
            <div className="mx-2">
            <strong><p className="card-author mb-0">Author:{props.username}</p></strong>
            <p style={{textAlign:'center'}}>{formatDistanceToNow(new Date(props.createdat), { addSuffix: true })}</p>
            </div>
            
            </div>
            
            {/* <a href="#" className="btn btn-primary">
              Read More...
            </a> */}
          </div>
          
        </div>
        </Link>
      </div>
    </>
  );
}

export default Blogcard;
