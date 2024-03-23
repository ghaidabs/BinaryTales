import React from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Search from './pages/Search.jsx';
import Blog from './pages/Blog.jsx';
import BookList from './pages/BookList.jsx';
import Login from "../../logsign/client/src/components/Login";
import Signup from "../../logsign/client/src/components/Signup";

const App = ()=> {
  const user = localStorage.getItem("token");
  return(
    <div>
        <Routes> 
          <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Blog' element={<Blog />} /> 
          <Route path='/AboutUs' element={<AboutUs />} /> 
          <Route path='/Search' element={<Search />} />
          <Route path='/BookList' element={<BookList />} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/Login" exact element={<Login />} />
    
        </Routes>   
    </div>
    
  )
}

export default App