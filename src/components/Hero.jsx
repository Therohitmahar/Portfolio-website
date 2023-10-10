import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {}, []);
  return (
    <main className="main">
      <div className="glass" style={{ marginTop: "30px" }}>
        <div className="hero-section">
          <p className="hi">Hi, my name is</p>
          <h1 className="name">
            <span className="name__span"></span>
          </h1>
          <h2>I build things for the web.</h2>
          <p>
            I am a Software Engineer based in India. Currently I'm working on my
            personal projects building knowledge of JavaScript and React.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
