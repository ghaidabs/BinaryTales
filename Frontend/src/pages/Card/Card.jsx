import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

const Card = (props) => {
    const dataArray = Array.isArray(props.data) ? props.data : [props.data];
    
    return (
        <div className="card-container">
          {dataArray.map((d) => (
            <div key={d._id} className="card">
              <figure className="figure">
                <Link to={`/book/${d._id}`}>
                  <img src={d.imageURL} alt="image" />
                </Link>
                <figcaption className="figure-caption">
                  <Link to={`/book/${d._id}`}>{d.Book_title}</Link>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      );
};

export default Card;