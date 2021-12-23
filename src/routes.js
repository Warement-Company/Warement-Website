import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/contact" exact element={<ContactUs />} />
    </Routes>
  );
}
