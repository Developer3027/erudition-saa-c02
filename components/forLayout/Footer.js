import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='foot-container'>
      <div className='foot-wrap'>
        <div>
          <a
            href='https://mason-roberts.com'
            target='_blank'
            rel='noopener noreferrer'>
            Powered by <span className='foot-logo'>Developer3027</span>
          </a>
        </div>
        <div className='foot-links'>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/saa-prep'>
            <a>Cert Prep</a>
          </Link>
        </div>
        <div className='foot-links'>
          <Link href='/exam-prep'>
            <a>Exam Prep</a>
          </Link>
          <Link href='/donate'>
            <a>Donate</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
