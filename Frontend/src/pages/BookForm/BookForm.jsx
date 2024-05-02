import React, { useState } from 'react';
import './BookForm.css';
const INITIAL_STATE = {
  Book_title: '',
  Type: '',
  Number_Of_Pages: '',
  Price: '',
  Category: '',
  Description: '',
  imageURL: '',
};

const BookForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [customCategory, setCustomCategory] = useState('');
  const [customType, setCustomType] = useState('');
  const [success, setSuccess] = useState(false); // add a state to track success


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleCustomCategoryChange = (e) => {
    setCustomCategory(e.target.value);
  };

  const handleCustomTypeChange = (e) => {
    setCustomType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const category = formData.Category === 'Other' ? customCategory : formData.Category;
      const type = formData.Type === 'Other' ? customType : formData.Type;
      const response = await fetch('http://localhost:5555/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          Category: category,
          Type: type,
         }),
      });
      if (response.ok) {
        setFormData(INITIAL_STATE);
        setCustomCategory('');
        setCustomType('');
        setSuccess(true); 
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      {success? (
        <div>
          <p>BOOK ADDED SUCCESSFULLY !</p>
        </div>
      ) : (
        <>
          <label >Book Title:</label>
          <input
            type="text"
            id="Book_title"
            name="Book_title"
            value={formData.Book_title}
            onChange={handleChange}
            required
          />
      
          <label >Category:</label>
          <select
            id="Category"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="IOT">IOT</option>
            <option value="Programming Languages">Programming Languages</option>
            <option value="Game Development">Game Development</option>
            <option value="Web Development">Web Development</option>
            <option value="Other">Other</option>
          </select>
          {formData.Category === 'Other' && (
            <div>
              <label>Other:</label>
              <input
                type="text"
                id="customCategory"
                name="customCategory"
                value={customCategory}
                onChange={handleCustomCategoryChange}
                required
              />
            </div>
          )}

          <label >Type:</label>
          <select
            id="Type"
            name="Type"
            value={formData.Type}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="Hardcover">Hardcover</option>
            <option value="Kindle">Kindle</option>
            <option value="Paperback">Paperback</option>
            <option value="ebook">ebook</option>
            <option value="Other">Other</option>
          </select>
          {formData.Type === 'Other' && (
            <div>
              <label>Other:</label>
              <input
                type="text"
                id="customType"
                name="customType"
                value={customType}
                onChange={handleCustomTypeChange}
                required
              />
            </div>
          )}
      
          <label >Number Of Pages:</label>
          <input
            type="text"
            id="Number_Of_Pages"
            name="Number_Of_Pages"
            value={formData.Number_Of_Pages}
            onChange={handleChange}
            required
          />
      
          <label >Price ($):</label>
          <input
            type="text"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            required
          />
      
          <label >Description:</label>
          <input
            type="text"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          />
      
          <label >Book Image URL:</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            required
          />
      
          <button type="submit">Add Book</button>
        </>
      )
    }
    </form>
  );
};

export default BookForm;