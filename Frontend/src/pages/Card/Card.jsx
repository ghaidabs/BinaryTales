import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

const Card = (props) => {
    return (
        <div className="body">
            {props.data.map((d) => (
                <span key={d._id}>
                    <figure className="figure">
                        <Link to={`/book/${d._id}`}><img src={d.imageURL} alt="image" /></Link>
                        <figcaption className="figure-caption">
                            <Link to={`/book/${d._id}`}>{d.Book_title}</Link>
                        </figcaption>
                    </figure>
                </span>
            ))}
        </div>
    );
};

export default Card;