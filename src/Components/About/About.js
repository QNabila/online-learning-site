import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h2>About Us</h2>
      </div>
      <p className="mt-5">
        <b>Our Vision</b><br/>We believe that learners can thrive in digital classrooms
        that are engaging, learning-focussed and inclusive.
      </p>
      <p className="mt-5">
        <b>Our Mission</b><br/>Our mission is to lead in the development and delivery of
        innovative digital learning experiences.
      </p>
    </div>
  );
};

export default About;
