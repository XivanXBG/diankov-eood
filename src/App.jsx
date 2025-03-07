import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(`/${redirect}`);
    }
  }, [navigate]);


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
