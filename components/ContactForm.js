import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactForm = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [message, setMessage] = useState({ name: '', email: '', detail: ''})

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (message.name === '' || message.email === '' || message.detail === '') {
      setError('Please fill out form');
    } else if (message.email.length < 8 && !emailRE.test(message.email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }

    const collectionRef = collection(db, 'contact')
    try {
      const docRef = await addDoc(collectionRef, {
        ...message, timestamp: serverTimestamp()
      })
      setMessage({ name: '', email: '', detail: ''})
      setSuccess('Thank you, message has been sent.')
      setTimeout(() => setSuccess(''), 3000)
    } catch(err) {
      setError(err);
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
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
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
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            placeholder='Email'
          />
        </div>
        <div className={styles.contactInputWrap}>
          <label className={styles.contactLabel} htmlFor='detail'>
            Message
          </label>
          <textarea
            className={styles.contactTextArea}
            cols='4'
            rows='5'
            id='detail'
            value={message.detail}
            onChange={(e) => setMessage({ ...message, detail: e.target.value })}
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
