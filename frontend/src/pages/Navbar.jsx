import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
		window.location.reload();
	};  
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
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
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for a book" aria-label="Search for a book" />
              <Link to="/search" className="btn btn-outline-success" style={{ backgroundColor: '#567584', borderColor:'#567584',color:'#FFFFFF'}}>Search</Link>
            </form>
          </div>
        </div>
        
      </nav>
      
    );
}

export default Navbar;
