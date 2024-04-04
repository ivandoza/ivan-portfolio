import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModalPage from "./pages/ModalPage";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ModalPage />} />
    </Routes>
  </Router>
  );
}

export default App;
