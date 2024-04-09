import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`);
        console.log(response);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  return (
    <section className='book-details'>
      <div className='container'>
        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.imageURL || "Image not found"} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.Book_title || "Title not found"}</span>
            </div>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.Type || "Type not found"}</span>
            </div>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.Price || "Price not found"}</span>
            </div>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.Category || "Category not found"}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.Description || "Description not found"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
