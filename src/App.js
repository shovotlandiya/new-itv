import "./App.css";
import Header from "./components/Header/Header";
import React, { useRef, useState } from "react";

import { Routes, Route } from "react-router-dom";

// import "./styles.css";

import Footer from "./components/Footer/Footer";
import Films from "./Pages/Films/Films";
import Home from "./Pages/Home/Home";
import SinglePage from "./Pages/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telev" element={<Films />} />
        <Route path="/film" element={<Films />} />
        <Route path="/film/:id" element={<SinglePage />} />
        <Route path="/serials" element={<Films />} />
        <Route path="/cartoon" element={<Films />} />
        <Route path="/catalog" element={<Films />} />
        <Route path="/library" element={<Films />} />
        <Route path="/podpiska" element={<Films />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
