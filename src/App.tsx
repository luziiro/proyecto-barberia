import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Services />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="reservar" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;