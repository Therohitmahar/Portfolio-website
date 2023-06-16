import "./App.css";
import MouseoverEffect from "./components/MouseoverEffect";
import Navbar from "./components/Navbar";
import RandomLetterComponent from "./components/RandomLetterComponent";

import Work from "./components/Work";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
