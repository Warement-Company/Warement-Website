import React, { useState, useRef } from 'react';
import validator from 'validator';
import api from '../../api';

import { Footer } from '../../containers';
import { Navbar, Snackbar } from '../../components';

import './contactUs.css';

const SnackbarType = {
  success: 'success',
  fail: 'fail',
};

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const snackbarRef = useRef(null);
  const snackbarRefError = useRef(null);

  const validateEmail = (e) => {
    const emailValue = e.target.value;

    if (validator.isEmail(emailValue)) {
      setEmailError(false);
      setEmail(emailValue);
    } else {
      setEmailError(true);
    }
  };

  const sendDataClient = () => {
    if (emailError === true) {
      snackbarRefError.current.show();
    } else if (emailError === false) {
      api.post('/customers', { email, fullName, message }).then(() => {
        snackbarRef.current.show();
      });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container__contact">
        <div className="heading__product">
          <h1 className="title">
            Contact us
          </h1>
          <p className="description__contact">Let&apos;s talk about your idea – fill out the form on the right and we&apos;ll get back to you shortly. We can&apos;t wait to start working with you!</p>
        </div>
        <form className="form">
          <h2 className="title__form">Fill out the form</h2>
          <input onChange={(e) => setFullName(e.target.value)} className="form_input__contact" type="name" placeholder="Full name" />
          <input style={{ borderColor: `${emailError === true ? '#f54b42' : ''}` }} onChange={(e) => validateEmail(e)} className="form_input__contact" type="email" placeholder="Email address" />
          <textarea onChange={(e) => setMessage(e.target.value)} className="form_input__contact" cols="30" rows="5" placeholder="Message" />
          <button onClick={() => sendDataClient()} className="btn-contact" type="button">Send Message</button>
        </form>
      </div>
      <Snackbar
        ref={snackbarRef}
        message="We will be in touch"
        type={SnackbarType.success}
      />
      <Snackbar
        ref={snackbarRefError}
        message="Incorrect email"
        type={SnackbarType.fail}
      />
      <Footer />
    </div>
  );
};

export default ContactUs;
