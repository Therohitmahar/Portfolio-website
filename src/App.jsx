import "./styles/App.css";
import "./styles/style.css";
import Navbar from "./components/Navbar";

import Work from "./pages/Work";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Thoughts from "./pages/Thoughts";
import Utility from "./pages/Utility";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/utility" element={<Utility />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
