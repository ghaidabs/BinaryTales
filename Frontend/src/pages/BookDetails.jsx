import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:5555/api/book/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching book:', error);
        setError('Error fetching book details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const handleSaveBook = () => {
    // missing part
    console.log("Saving book:", book);
  };

  return (
    <div className="BookContainer">
      <img className="BookImage" src={book?.imageURL} alt="Book Cover" />
      <div className="BookInfo">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="Title">{book?.Book_title}</h2> 
          <button onClick={handleSaveBook}>Add to Booklist</button>
        </div>
        <div className="Detail"><strong>Price:</strong> ${book?.Price.toFixed(2)}</div> 
        <div className="Detail"><strong>Type:</strong> {book?.Type}</div> 
        <div className="Detail"><strong>Category:</strong> {book?.Category}</div>
        <div className="Detail"><strong>Number Of Pages:</strong> {book?.Number_Of_Pages}</div>
        <p className="Detail">{book?.Description}</p>
      </div>
    </div>
  );
};

export default BookDetails;

