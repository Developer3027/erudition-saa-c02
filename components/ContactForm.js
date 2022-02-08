import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactForm = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name === '' || email === '' || message === '') {
      setError('Please fill out form');
    } else if (email.length < 8 && !emailRE.test(email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='signIn-form'>
        {error && <p className='error-text'>{error}</p>}
        {success && <p className='success-text'>{success}</p>}
        <div className={styles.contactInputWrap}>
          <label className={styles.contactLabel} htmlFor='name'>
            Name
          </label>
          <input
            className={styles.contactInput}
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
        </div>
        <div className={styles.contactInputWrap}>
          <label className={styles.contactLabel} htmlFor='email'>
            Email
          </label>
          <input
            className={styles.contactInput}
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className={styles.contactInputWrap}>
          <label className={styles.contactLabel} htmlFor='message'>
            Message
          </label>
          <textarea
            className={styles.contactTextArea}
            cols='4'
            rows='5'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='How can I help you?'
          />
        </div>
        <div>
          <button className={styles.contactBtn} type='submit'>
            Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
