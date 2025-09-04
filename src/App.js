// src/App.js
import React from 'react';
import './App.css';
import Create from './Componenets/Create';
import Figma from './Componenets/Figma';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/figma" element={<Figma />} />
        {/* Optional: 404 Not Found route */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
