import React from 'react';
import { Link } from "react-router-dom";
function Footer() {
    return (
          <div class="site-footer">

          <footer class="text-center text-lg-start border border-white mt-xl-5 pt-4">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Books Categories</h5>
                  <ul class="list-unstyled mb-4">
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
              
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Quick Links</h5>
                  <ul class="list-unstyled">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/faq">FAQ</a></li>
                      <li><a href="/">Privacy Policy</a></li>
                  </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 class="text-uppercase mb-4">Contact Us</h5>
        
                  <ul className="social-icons">
                      <li><a className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i> Facebook</a></li>
                      <li><a className="twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i> Twitter</a></li>
                      <li><a className="dribbble" href="https://instagram.com/"><i className="fa fa-instagram"></i> Instagram</a></li>
                      <li><a className="linkedin" href="https://linkedin.com/"><i className="fa fa-linkedin"></i> Linkedin</a></li>   
                    </ul>
                </div>
      
      
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>
      
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" placeholder='Email Address'/>
                </div>
      
                <button type="submit" class="btn btn-outline-white btn-block">Subscribe</button>
              </div>
            </div>
          </div>
      
          <div class="text-center p-3 border-top border-white">
              Copyright &copy; 2024 All Rights Reserved by our website
          </div>
        </footer>
        
      </div>
    );
}

export default Footer;


