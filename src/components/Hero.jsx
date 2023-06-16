import React from "react";
import Lottie from "lottie-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import animationData from "../assets/codeAnimation.json";

function Hero() {
  return (
    <main className="main">
      <div className="glass" style={{ marginTop: "30px" }}>
        <div className="animation">
          <Lottie animationData={animationData} />
        </div>
        <div className="hero-section">
          <h1 style={{ marginBottom: "50px" }}>
            Hello, my name is <span className="name">Rohit.</span>
          </h1>
          <p>
            I am a Software Engineer based in Maharashtra, India. Currently I'm
            working on my personal projects building knowledge of JavaScript and
            React.
          </p>
        </div>
        <div className="social">
          <FiLinkedin />
          <RiGithubLine />
          <RxTwitterLogo />
          <MdOutlineEmail />
        </div>
      </div>
    </main>
  );
}

export default Hero;
