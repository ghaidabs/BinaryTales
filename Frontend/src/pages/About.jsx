import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"
function About() {
    return (
        <div className='About'>
            <h1>Empowering Minds, One Byte at a Time.</h1>
            <p>BinaryTales is your interactive gateway to the captivating world of computer science. 
            We believe that knowledge acquisition should be an engaging and empowering experience, one byte at a time. 
            Our web application is meticulously designed to revolutionize the way you discover and explore computer science books.</p>
            <h2>Unveiling the Perfect Book</h2>
            <p>BinaryTales boasts an intuitive and visually appealing interface, making navigation a breeze. Our powerful search functionalities 
            help you find the exact resources you need in a flash.  Can't decide between two great reads? 
            Dive deeper with user-generated reviews and ratings to discover what the community recommends.</p>
            <h2>A Community That Curates</h2>
            <p>BinaryTales is more than just a search engine; it's a thriving community of learners. 
            Share your favorite finds and contribute to our ever-expanding library of relevant and high-quality 
            resources. Plus,you can easily build your own personalized reading list by saving books 
            directly from our common library your booklist.</p>
            <h2>Insights to Empower</h2>
            <p>BinaryTales empowers you to make informed decisions with our interactive dashboard. 
            Gain valuable insights into popular books and trending topics, 
            allowing you to curate a personalized learning experience that perfectly aligns with your goals.</p>
        </div>
    );
}

export default About;
