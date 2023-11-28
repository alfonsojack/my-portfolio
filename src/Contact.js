//template_21szzrk
// akABnrwFTE-maTSN_

import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ndjwyle', 'template_21szzrk', form.current, 'akABnrwFTE-maTSN_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className='form-title'>Contact Me</h2>
      <div className='contained'>
      <div className='input-unit'>
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
      <div className='input-unit'>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      </div>
      <div className='input-unit'>
      <label>Message</label>
      <textarea name="message" />
      <input className='btnsend' type="submit" value="Send" />
      </div>
    </form>
  );
};

export default Contact