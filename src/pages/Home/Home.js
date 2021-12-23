import React from 'react';

import { Footer, Possibility, WhatWarement, Header } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';

import './home.css';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatWarement />
    {/* <Features /> */}
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default Home;
