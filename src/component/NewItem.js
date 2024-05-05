import React from 'react';

const NewsItems = ({ title, description, img, url }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", height:"500px" }} >
        <img src={img} className="card-img-top" alt="..." style={{ width: "285px", height: "145px" }} />
        <div className="card-body">
          <h5 className="card-title" style={{height:"75px", overflow:"hidden"}}>{title}...</h5>
          <p className="card-text" style={{height:"170px" , overflow:"hidden"}}>
            {description}...
          </p>
          <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark mt-2">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
