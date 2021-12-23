import React from 'react';

import { Footer } from '../../containers';
import { Navbar } from '../../components';

import './contactUs.css';

const ContactUs = () => (
  <div className="App">
    <Navbar />
    <div className="container">
      <div className="heading__product">
        <h1 className="title">
          Contact us
        </h1>
        <p className="description__contact">Let&apos;s talk about your idea – fill out the form on the right and we&apos;ll get back to you shortly. We can&apos;t wait to start working with you!</p>
      </div>
      <form className="form">
        <h2 className="title__form">Fill out the form</h2>
        <input type="name" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <textarea cols="30" rows="5" placeholder="Message" />
        <button className="btn-contact" type="button">Send Message</button>
      </form>
    </div>
    <Footer />
  </div>
);

export default ContactUs;
