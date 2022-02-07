import Head from 'next/head';
import Navbar from '../components/forLayout/Navbar';
import Footer from '../components/forLayout/Footer';
import '../styles/globals.css';
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Erudition SAA-C02</title>
        <meta
          name='description'
          content='Cliff Notes for the Solution Architect Associate Certification course on A Cloud Guru. Brush up on the information required to pass the SAA-C02 Exam. Presented by Developer 3027, Mason Roberts. Give yourself the best shot at passing the AWS certification. Pass the aws saa-c02 certification.'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
