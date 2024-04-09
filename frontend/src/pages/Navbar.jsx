import React, { useEffect , useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import ErrorPage from './ErrorPage';
import Card from './Card/Card';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
		window.location.reload();
	};  
  const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult]=useState([]);
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm",searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
        

    }

    const searchHandle = async (e) => {

        setSearchTerm(e.target.value);
        let key = e.target.value;
        if(key){
          fetch(`http://localhost:5555/api/search/${key}`)
          .then(res => res.json())
          .then(searchResult => {
              setSearchResult(searchResult);
              console.log(searchResult);
          })
          
            
        }   
    }

  return (
    <div>
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
            <div>
            
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search for a book" aria-label="Search for a book" value={searchTerm} onChange={searchHandle}/>
      
              <Link to="/search" className="btn btn-outline-success" style={{ backgroundColor: '#567584', borderColor:'#567584',color:'#FFFFFF'}}>search</Link>
            </form>
            <div className="search-result" style={{backgroundColor:'white',marginTop:'10px',display:'inline-block',position:'absolute',zIndex: 1}}>
                {searchResult.map((d,i) => {
                    return(
                        <div style={{backgroundColor: '#f9f9f9',boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',borderRadius:'2px',display:'block'}}>
                        <Link to={`/Book/${d._id}`} style={{color:'black',padding: '12px 16px',textDecoration:'none',textAlign:'left',display:'flex'}}key={i}>
                                    {d.Book_title}
                                    </Link>
                        
                        </div>
    
                        )
    
                    }
                    )}
                           
                </div>
            </div>
          </div>
        </div>
        
      </nav>
      <Search data={searchResult}  />
    </div>
      
      
      
    );
    
}

export default Navbar;
