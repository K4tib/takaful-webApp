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
          <Route
            path="/"
            element={
              <Categories
                headerTitle="Category 1"
                imageUrl="image-url-1"
                CanotParagraphe="Paragraph for Category 1"
              />
            }
          />
        </Routes>
        <h1>works</h1>

        {/* Footer  */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
