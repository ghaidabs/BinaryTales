import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

const Card = (props) => {
    const dataArray = Array.isArray(props.data) ? props.data : [props.data];
    
    return (
      <div className="card-scroll-container">
        <div className="card-container">
          {dataArray.map((d) => (
            <div key={d._id} className="card">
              <Link to={`/book/${d._id}`}>
                <img src={d.imageURL} alt="Book Cover" className="card-image" />
                <figcaption className="card-title">{d.Book_title}</figcaption>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card;