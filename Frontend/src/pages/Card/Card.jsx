import React, { useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import './Card.css';
import'bootstrap/dist/css/bootstrap.min.css'
const Card = (props) => {
    return (
            <div className="body">
            {props.data.map((d,i)=> {
                        return(
                            <span>
                                <figure class="figure">
                                <img src={d.imageURL} class="figure-img img-fluid rounded" alt="image"/>
                                <figcaption class="figure-caption"><Link class="button" to={`/Book/${d._id}`} >{d.Book_title}</Link></figcaption>
                                    
                            </figure>
                            </span>
                                
                            
                            )
                    })
            }
            </div>
            );
        };
export default Card;