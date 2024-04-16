import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import HomePage from "./pages/HomePage";
import ModalPage from "./pages/ModalPage";
import i18n from './components/Translation/i18n';

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ModalPage />} />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
