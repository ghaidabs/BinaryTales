import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './BooklistSlice';

const Booklist = () => {
  const books = useSelector((state) => state.booklist.books);
  console.log(books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <>
      {books.map((book) => (
        <div key={book._id} className="BookContainer">
        <img className="BookImage" src={book?.imageURL} alt="Book Cover" />
        <div className="BookInfo">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 className="Title">{book?.Book_title}</h2> 
            <button onClick={() => handleRemoveBook(book._id)}>Remove</button>
          </div>
          <div className="Detail"><strong>Price:</strong> ${book?.Price.toFixed(2)}</div> 
          <div className="Detail"><strong>Type:</strong> {book?.Type}</div> 
          <div className="Detail"><strong>Category:</strong> {book?.Category}</div>
          <div className="Detail"><strong>Number Of Pages:</strong> {book?.Number_Of_Pages}</div>
          <p className="Detail">{book?.Description}</p>
        </div>
      </div>
      ))}
    </>
  );
};

export default Booklist;





