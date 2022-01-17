import React, { useState, useRef } from 'react';
import validator from 'validator';
import people from '../../assets/people.png';
import ai from '../../assets/ai.webp';
import './header.css';
import api from '../../api';
import { Snackbar } from '../../components';

const SnackbarType = {
  success: 'success',
  fail: 'fail',
};

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

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

  const sendClientEmail = () => {
    if (emailError === true) {
      snackbarRefError.current.show();
    } else if (emailError === false) {
      api.post('/customers', { email }).then(() => {
        snackbarRef.current.show();
      });
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with Warement</h1>
        <p>Let&apos;s help you create your company&apos;s future. Get in touch with our team of attendants so that we can plan the future of your company.</p>

        <div className="gpt3__header-content__input">
          <input style={{ borderColor: `${emailError === true ? '#f54b42' : ''}` }} onChange={(e) => validateEmail(e)} type="email" placeholder="Your Email Address" />
          <button onClick={() => sendClientEmail()} type="button">Send</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 satisfied customers with our service!</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
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
    </div>
  );
};

export default Header;
