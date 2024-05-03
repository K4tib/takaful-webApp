import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Categories from "./Pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
        <h1>works</h1>

        {/* Footer  */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
