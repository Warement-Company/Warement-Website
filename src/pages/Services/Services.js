import React from 'react';

import { MdOutlineDesignServices, MdOutlineTouchApp } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { GiTargetShot } from 'react-icons/gi';

import './services.css';

import { Navbar } from '../../components';

const Services = () => (
  <div className="App">
    <Navbar />
    <div className="container">
      <div className="header">
        <h1 className="title">Take a look at how we can help your product</h1>
        <p className="description">We develop your ideas by turning them into user-centered products ready for market validation.</p>
      </div>
      <div className="cards">
        <div className="card">
          <div
            style={{
              display: 'flex',
              height: '50px',
              width: '50px',
              backgroundColor: '#a7e8a9',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <BiCodeAlt style={{ color: '#62bd65' }} size="large" />
          </div>
          <h1 className="title__card">Web Development</h1>
          <p className="description__card">As a part-software development company, we continually improve our technical skills, excel at new technologies, and look for the best practices.</p>
        </div>
        <div className="card">
          <div
            style={{
              display: 'flex',
              height: '50px',
              width: '50px',
              backgroundColor: '#c97d7d',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <MdOutlineDesignServices style={{ color: '#cf3e3e' }} size="large" />
          </div>
          <h1 className="title__card">Product Design</h1>
          <p className="description__card">Bringing heart and soul to create products that will maximize user experience and satisfy business metrics while looking just stunning.</p>
        </div>
        <div className="card">
          <div
            style={{
              display: 'flex',
              height: '50px',
              width: '50px',
              backgroundColor: '#deb271',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <MdOutlineTouchApp style={{ color: '#f09716' }} size="large" />
          </div>
          <h1 className="title__card">Mobile Development</h1>
          <p className="description__card">A smooth mobile development process to optimize your application for most popular devices and ensure the best user experience.</p>
        </div>
        <div className="card">
          <div
            style={{
              display: 'flex',
              height: '50px',
              width: '50px',
              backgroundColor: '#6d8bd6',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <GiTargetShot style={{ color: '#154cd6' }} size="large" />
          </div>
          <h1 className="title__card">SEO</h1>
          <p className="description__card">Search Engine Optimization studies and strategies to enhance and expand the number of visits and consequently the number of searches on your site.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
