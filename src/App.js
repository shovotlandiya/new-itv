import "./App.css";
import Header from "./components/Header/Header";
import React, { useRef, useState } from "react";

import { Routes, Route } from "react-router-dom";

// import "./styles.css";

import Footer from "./components/Footer/Footer";
import Films from "./Pages/Films/Films";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Films />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
