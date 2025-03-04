import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
