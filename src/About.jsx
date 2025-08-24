 
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Food Fusion! We are dedicated to serving delicious and hygienic meals that cater to both vegetarian and non-vegetarian preferences. Our passion is food, and our goal is to bring smiles with every bite.
      </p>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@foodfusion.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: 123 Food Street, Tasty Town, India</p>
      </div>
    </div>
  );
};

export default About;
