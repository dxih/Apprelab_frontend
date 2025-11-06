import React from "react";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Learn from "./pages/Learn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/mentor" element={<Mentor />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
