import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Card from './Card/Card';
import axios from 'axios';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { key } = useParams();

  useEffect(() => {
    if (key) { 
      fetchSearchResults(key);
    }
  }, [key]);

  const fetchSearchResults = async (searchTerm) => {
    axios.get(`http://localhost:5555/api/search/${searchTerm}`)
    .then(response => {
      console.log(response.data)
      setSearchResults(response.data);
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
  };
  
  return (
    <div>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((result, index) => (
            <div key={index} >
              <Card data={result} />
            </div>
          ))}
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Search;

  
