import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from '../Card/Card';
import axios from 'axios'; 

const Home = () => {
    const [booksByCategory, setBooksByCategory] = useState({});

    useEffect(() => {
        const fetchBooksByCategory = async () => {
            try {
                const response = await axios.get('http://localhost:5555/api/book'); 
                const groupedBooks = {}; 
                response.data.forEach(book => {
                    if (!groupedBooks[book.Category]) {
                        groupedBooks[book.Category] = [];
                    }
                    groupedBooks[book.Category].push(book);
                });
                setBooksByCategory(groupedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooksByCategory();
    }, []);

    return (
      <>
        <br></br>
        <div className="horizontal-line"></div>
        <div id="iframeContainer">
            <iframe src="http://127.0.0.1:8050/" scrolling="no"></iframe>
        </div>
        <div className="horizontal-line"></div>
        <br></br>
          <div className="books">
              {Object.keys(booksByCategory).map(category => (
                  <div key={category}>
                      <h2 >{category}</h2>
                      <div>
                          <Card data={booksByCategory[category]} />
                      </div>
                  </div>))}
          </div>
      </>
    );
};

export default Home;

