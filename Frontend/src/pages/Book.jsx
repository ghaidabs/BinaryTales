import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      
      <div className='book-item-img'>
        <img src = {book.imageURL} alt = "cover" />
      </div>
      
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.Book_title}</span>
          </div>
        </Link>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Type: </span>
          <span>{book.Type}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{book.Price}</span>
        </div>
        
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Category: </span>
          <span>{book.Category }</span>
        </div>
        
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Description: </span>
          <span>{book.Description}</span>
        </div>

      </div>
    </div>
  )
}

export default Book