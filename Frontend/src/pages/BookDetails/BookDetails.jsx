import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../Booklist/BooklistSlice.jsx';
import './BookDetails.css'

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booklist.books);


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
  
  const handleAddToBooklist = () => {
    dispatch(addBook(book));
  };
  
  const handleRemoveFromBooklist = () => {
    dispatch(removeBook(book._id));
  };

  const isBookInBooklist = books.some((b) => b._id === book._id);

  return (
    <div className="BookContainer">
      <img className="BookImage" src={book?.imageURL} alt="Book Cover" />
      <div className="BookInfo">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="Title">{book?.Book_title}</h2> 
          <button onClick={isBookInBooklist? handleRemoveFromBooklist : handleAddToBooklist}>
            {isBookInBooklist? 'Remove from Booklist' : 'Add to Booklist'}
          </button>
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