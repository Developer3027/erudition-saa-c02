import { Provider } from 'react-redux';
import store from '../redux/store';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '@stripe/stripe-js';

import Navbar from '../components/forLayout/Navbar';
import Footer from '../components/forLayout/Footer';
import '../styles/globals.css';
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Erudition SAA-C02</title>
        <meta charset='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          property='og:url'
          content='https://erudition-saa-c02.vercel.app'
        />
        <meta property='og:title' content='Erudition SAA-C02' />
        <meta name='author' content='Mason Roberts' />
        <meta
          name='description'
          content='Cliff Notes for the Solution Architect Associate Certification course on A Cloud Guru. Brush up on the information required to pass the AWS SAA-C02 Exam. Presented by Developer 3027, Mason Roberts. Give yourself the best shot at passing the AWS certification. Pass the aws saa-c02 certification.'
        />
        <meta
          property='og:image'
          content='https://dev3027public.s3.amazonaws.com/erudition-card.png'
          alt='erudition card image'
        />
        <link rel='preconnect' href='https://fonts.google.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
