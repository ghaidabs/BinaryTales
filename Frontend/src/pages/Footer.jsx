import React from 'react';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
            <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="">Artificial intelligence</a></li>
                  <li><a href="">UI Design</a></li>
                  <li><a href="">Web Development</a></li>
                  <li><a href="">Programming Languages</a></li>
                  <li><a href="">Computer architecture and organization</a></li>
                  <li><a href="">Computer networks</a></li>
                  <li><a href="">Data Structure</a></li>
                  <li><a href="">Robotics and Iot</a></li>
                  <li><a href="">Cryptography</a></li>
                </ul>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="/AboutUs">About Us</a></li>
                  <li><a href="/ContactUs">Contact Us</a></li>
                  <li><a href="/BookList">BookList</a></li>
                  <li><a href="/Blog">Blog</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <h6 className="copyright-text">Copyright &copy; 2024 All Rights Reserved by our website
                </h6>
              </div>
    
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="https://instagram.com/"><i className="fa fa-instagram"></i></a></li>
                  <li><a className="linkedin" href="https://linkedin.com/"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
        </footer>
        </div>
    );
}

export default Footer;