import React from "react";
import "../styles/style.css";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/aboutAnimation.json";
function About() {
  return (
    <>
      <div className="about-container">
        <h2 className="headline">About Me</h2>

        <div className="about">
          <div>
            <p>
              Hello! My name is Rohit and I enjoy creating things that live on
              the internet.
              <br /> My interest in web development started back in College,
              When i only used Wordpress ans Wix to create websites.
              <br /> Fast-forward to today, and I'm Working building my Own
              Projects and martering the tech stacks and sharing my knowledge
              along the way with my blogs.
            </p>
            <span>
              Here are a few technologies I’ve been working with recently:
            </span>
            <ul>
              <li>Javascripts</li>
              <li>React</li>
              <li>TypeScripts</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <Lottie animationData={aboutAnimation} />
        </div>
      </div>
    </>
  );
}

export default About;
