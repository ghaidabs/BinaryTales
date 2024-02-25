
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Search from './pages/Search.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';
import BookList from './pages/BookList.jsx';

const App = ()=> {
  return(
    <div>
        <Routes> 
          <Route path='/' element={<Navbar />} />
          <Route path='/Blog' element={<Blog />} /> 
          <Route path='/AboutUs' element={<About />} /> 
          <Route path='/Search' element={<Search />} />
          <Route path='/Login' element={<Login />} /> 
          <Route path='/BookList' element={<BookList />} />
        </Routes>   
    </div>
    
  )
}
export default App