import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css'
import { Home } from './pages/Home';
import { Details } from './pages/Details'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:page" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/:page/details/:id" element={<Details />} />
    </Routes>

   
  </BrowserRouter>
);