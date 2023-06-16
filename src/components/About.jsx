import React from "react";
import "../style.css";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/aboutAnimation.json";
function About() {
  return (
    <>
      <div className="about">
        <div>
          <h2 className="about-title">About Me</h2>
          <p>
            Hello! My name is Rohit and I enjoy creating things that live on the
            internet.
            <br /> My interest in web development started back in College, When
            i only used Wordpress ans Wix to create websites.
            <br /> Fast-forward to today, and I'm Working building my Own
            Projects and martering the tech stacks and sharing my knowledge
            along the way with my blogs.
          </p>
          <span>
            Here are a few technologies I’ve been working with recently:
          </span>
          <ul>
            <li>React</li>
            <li>Javascripts</li>
            <li>TypeScripts</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <Lottie animationData={aboutAnimation} />
      </div>
    </>
  );
}

export default About;
