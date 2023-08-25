import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
