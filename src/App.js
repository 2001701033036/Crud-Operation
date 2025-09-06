// src/App.js
import React from 'react';
import './App.css';
import Create from './Componenets/Create';
import Figma from './Componenets/Figma';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Optional Navigation */}
      {/* <nav className='mt-7 flex gap-3 items-center justify-center '>
        <Link className=' w-36 px-4 py-3 bg-green-600 rounded-md text-white hover:bg-cyan-500 transition-all duration-300' to="/">CRUD Project</Link>
        <Link className='w-36 px-4 py-3 bg-green-600 rounded-md text-white hover:bg-cyan-500 transition-all duration-300'  to="/figma">Figma</Link>
      </nav> */}

      {/* Routing */}
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
