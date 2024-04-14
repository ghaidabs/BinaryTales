import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
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
          <Link className="navbar-brand" to="/">BinaryTales</Link>
          <button href="/" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booklist">Booklist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item" onClick={handleLogout}>
                <Link className="nav-link" to="/login">Logout</Link>
              </li>
            </ul>
        
            <div>
              <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search for a book" value={searchTerm} onChange={handleChange} />
                <button className="btn btn-outline-success" style={{ backgroundColor: '#567584', borderColor: '#567584', color: '#FFFFFF'}} type="submit">Search</button>
              </form>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;




