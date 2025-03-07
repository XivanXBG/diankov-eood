import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

import "./App.css";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
