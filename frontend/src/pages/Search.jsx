import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchCard = ({ data }) => {
  return (
    <div style={styles.card}>
      <Link to={`/book/${data._id}`} style={styles.link}>
        <img src={data.imageURL} alt={data.Book_title} style={styles.image} />
        <div style={styles.title}>{data.Book_title}</div>
      </Link>
    </div>
  );
};

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { key } = useParams();

  useEffect(() => {
    if (key) {
      fetchSearchResults(key);
    }
  }, [key]);

  const fetchSearchResults = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5555/api/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div style={styles.container}>
      {searchResults.length > 0 ? (
        <div style={styles.grid}>
          {searchResults.map((result, index) => (
            <SearchCard key={index} data={result} />
          ))}
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '25px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
    color: 'black',
    fontSize: '18px',
  },
  link: {
    textDecoration: 'none', 
    color: 'inherit', 
  },
};

export default Search;


  
