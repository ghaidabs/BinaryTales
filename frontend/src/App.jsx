import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About.jsx';
import Search from './pages/Search.jsx';
import Blog from './pages/Blog.jsx';
import Booklist from './pages/Booklist.jsx';
import Login from './pages/Login/index.jsx';
import Signup from './pages/Signup/index.jsx';
import Book from './pages/Book.jsx';
import BookDetails from './pages/BookDetails.jsx';

const App = () => {
  const user = localStorage.getItem("token");
  console.log(user); // Check the value of user
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path='/*'
          element={
            user ? ( 
              <>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/book' element={<Book />} />
                  <Route path='/bookList' element={<Booklist />} />
                  <Route path ='/book/:id' element={<BookDetails />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
              </>
            ) : (
              // If not logged in, redirect to login
              <Navigate to='/login' replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
