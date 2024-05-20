import React from "react";

function Blogcard(props) {
    console.log(props);
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4">
        {props.thumbnail && (
                  <img src={`http://localhost:5000${props.thumbnail}`} className="card-img-top" alt="Thumbnail" />
                )}
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-author">Author:{props.username}</p>
            <p className="card-text">
              {props.content.substring(0,100)}...
            </p>
            <a href="#" className="btn btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
