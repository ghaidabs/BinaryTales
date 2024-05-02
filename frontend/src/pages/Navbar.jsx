import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult]=useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    let key = e.target.value;
    if(key){
      fetch(`http://localhost:5555/api/search/${key}`)
      .then(res => res.json())
      .then(searchResult => {
          setSearchResult(searchResult);
          console.log(searchResult);
      })}
  };
  
  const handleBookClick = () => {
    setSearchResult([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm); 
    navigate(`/search/${searchTerm}`);
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand mx-auto" to="/" style={{ color: '#567584', fontSize:'70px', fontStyle:'italic'}}>BinaryTales</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: '#635147',fontSize: '22px'}}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booklist" style={{ color: '#635147',fontSize: '22px' }}>Booklist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book/add" style={{ color: '#635147',fontSize: '22px' }}>Add Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" style={{ color: '#635147',fontSize: '22px' }}>Blog</Link>
              </li>
              <li className="nav-item" onClick={handleLogout}>
                <Link className="nav-link" to="/login" style={{ color: '#635147',fontSize: '22px' }}>Logout</Link>
              </li>
            </ul>
  
            <div style={{ position: 'absolute', right: '10px' }}>
              <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search for a book" value={searchTerm} style={{ width: '300px' }} onChange={handleChange} />
                <button className="btn btn-outline-success" style={{ backgroundColor: '#635147', borderColor: '#635147', color: '#FFFFFF'}} type="submit" onClick={handleBookClick}>Search</button>
              </form>
              <div className="search-result" style={{backgroundColor:'white',marginTop:'10px',display:'inline-block',position:'absolute',width: '300px',zIndex: 1}}>
                {searchResult.map((d,i) => {
                    return(
                        <div style={{backgroundColor: '#f9f9f9',boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',borderRadius:'2px',display:'block'}}>
                          <Link to={`/book/${d._id}`} style={{color:'black',padding: '12px 16px',textDecoration:'none',textAlign:'left',display:'flex'}} key={i} onClick={handleBookClick}>
                            {d.Book_title}</Link>
                        </div>
                )})}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  
  
  
}

export default Navbar;




