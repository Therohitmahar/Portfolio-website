import "../styles/App.css";
import "../styles/style.css";
import Navbar from "../components/Navbar";

import Work from "./Work";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
