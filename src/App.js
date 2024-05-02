import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CategoriesBody from "./components/CategoriesBody";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<CategoriesBody />} />
        </Routes>
        <h1>works</h1>

        {/* Footer  */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
