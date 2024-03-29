import React from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Search from './pages/Search.jsx';
import Blog from './pages/Blog.jsx';
import BookList from './pages/BookList.jsx';
import Login from "./pages/Login/index.jsx";
import Signup from "./pages/Signup/index.jsx";

const App = ()=> {
  const user = localStorage.getItem("token");
  return(
    <div>
        <Routes> 
          <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path='/blog' element={<Blog />} /> 
          <Route path='/aboutUs' element={<AboutUs />} /> 
          <Route path='/search' element={<Search />} />
          <Route path='/bookList' element={<BookList />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>   
    </div>
    
  )
}

export default App