import './App.css';
import React from "react"
import {Navigate, BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Home} from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
