import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/services" exact element={<Services />} />
    </Routes>
  );
}
