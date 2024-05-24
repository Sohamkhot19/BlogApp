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
            <p className="text-center mb-0 mt-0">{props.category}</p>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.content.substring(0,100)}...
            </p>
            <div className="d-flex">
            <img src="../blogimg.webp" alt="" width='50px' height='50px' style={{borderRadius:'50%'}}/>
            <div className="mx-2">
            <strong><p className="card-author mb-0">Author:{props.username}</p></strong>
            <p style={{textAlign:'center'}}>wed 20 aug,2020</p>
            </div>
            
            </div>
            
            {/* <a href="#" className="btn btn-primary">
              Read More...
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
