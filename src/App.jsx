import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";

import Work from "./components/Work";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Cursor /> */}
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
