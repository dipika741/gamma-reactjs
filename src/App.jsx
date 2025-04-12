import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Newsletter from "./components/Newsletter";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Example page
import Breadcrumbs from "./components/Breadcrumbs";
import FooterScripts from "./components/FooterScripts";
import Product from "./pages/Product";
//import "./assets/scss/style.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Newsletter />
      <Footer />
      <FooterScripts />
    </Router>
  );
};

export default App;
