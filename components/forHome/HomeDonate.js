import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

import styles from '../../styles/Home.module.css';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

let stripePromise


const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.stripe_public_key);
  }
  return stripePromise;
};

const HomeDonate = () => {
  const [loading, setLoading] =useState(false);
  const [support, setSupport] = useState(true);
  const [member, setMember] = useState(true);
  const [premium, setPremium] = useState(true);
  const [stripeError, setStripeError] = useState('');
  const { data: session } = useSession();

  //*] 5 dollar donate */
  const itemBasic = {
    price: 'price_1KSNlSCsfjcjCsMpk7dswfa3',
    quantity: 1
  };
  //*] 10 dollar donate */
  const itemPlus = {
    price: 'price_1KSRhMCsfjcjCsMponfxWvTc',
    quantity: 1
  };
  //*] 20 dollar donate */
  const itemMember = {
    price: 'price_1KSRmiCsfjcjCsMpET6AZDhq',
    quantity: 1
  };

  const checkoutOptionsBasic = {
    lineItems: [itemBasic],
    mode: 'payment',
    successUrl: 'http://localhost:3000/success',
    cancelUrl: 'http://localhost:3000'
  };

  const checkoutOptionsPlus = {
    lineItems: [itemPlus],
    mode: 'payment',
    successUrl: 'http://localhost:3000/success',
    cancelUrl: 'http://localhost:3000'
  };

  const checkoutOptionsMember = {
    lineItems: [itemMember],
    mode: 'payment',
    successUrl: 'http://localhost:3000/success',
    cancelUrl: 'http://localhost:3000'
  };

  const redirectToCheckoutBasic = async () => {
    setLoading(true);
    console.log(redirectToCheckoutBasic);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptionsBasic);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  const redirectToCheckoutPlus = async () => {
    setLoading(true);
    console.log(redirectToCheckoutPlus);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptionsPlus);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  const redirectToCheckoutMember = async () => {
    setLoading(true);
    console.log(redirectToCheckoutMember);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptionsMember);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className={styles.donateContainer}>
      <div className={styles.donateHead}>
        <h3 className={styles.subTitle}>Built for you!</h3>
        <p className={styles.donateSubTitle}>
          This site is 100% supported by you. Help keep it free, add new
          features and keep content up to date by showing your support today!
        </p>

        <div className={styles.donateGrid}>
          <div className={styles.donateCardLight}>
            {support ? (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Supportive</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setSupport(!support)}
                    className={styles.donateInfo}
                  />
                </div>
                <div className={styles.donatePrice}>
                  <h1>$ 5.00</h1>
                  <small>&nbsp;usd</small>
                </div>
                <div>
                  <div className={styles.donateList}>
                    <p>Keep the exam questions up to date!</p>
                    <p>Support new feature implementation</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Supportive</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setSupport(!support)}
                    className={styles.donateInfo}
                  />
                </div>
                <div>
                  <div className={styles.donateList}>
                    <p>
                      With your support I can keep this site up to date and up
                      and running.
                    </p>
                    <p>Coming Soon</p>
                    <p>
                      Light and Dark mode / Members hold questions for review /
                      Members see scores in dashboard / Members chat for
                      cert-prep
                    </p>
                  </div>
                </div>
              </>
            )}
            <button
              role='link'
              disabled={!session && !loading}
              onClick={redirectToCheckoutBasic}
              className={styles.donateBtn}>
              {session ? 'Donate Now' : 'Sign In'}
            </button>
          </div>

          <div className={styles.donateCard}>
            {premium ? (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Premium</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setPremium(!premium)}
                    className={styles.donateInfo}
                  />
                </div>
                <div className={styles.donatePrice}>
                  <h1>$ 20.00</h1>
                  <small>&nbsp;usd</small>
                </div>
                <div>
                  <h3 className={styles.donateListHead}>Coming Soon</h3>
                  <p>Member +</p>
                  <div className={styles.donateList}>
                    <p>Slack</p>
                    <p>ACloudGuru Membership</p>
                    <p>Test new features before public</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Premium</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setPremium(!premium)}
                    className={styles.donateInfo}
                  />
                </div>
                <div>
                  <div className={styles.donateList}>
                    <p>
                      Join Slack and gain access to other resources and easily
                      talk with others. <span className={styles.donateHL}>Coming soon!</span>
                    </p>
                    <p>
                      May take up to 8 hours to receive free week access to
                      ACloudGuru.
                    </p>
                    <p>
                      Future plans to offer basic access to ACloudGuru for
                      $42.50.
                    </p>
                  </div>
                </div>
              </>
            )}
            <button
              role='link'
              disabled={!session && !loading}
              onClick={redirectToCheckoutBasic}
              className={styles.donateBtn}>
              {session ? 'Support' : 'Sign In'}
            </button>
          </div>

          <div className={styles.donateCardLight}>
            {member ? (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Member</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setMember(!member)}
                    className={styles.donateInfo}
                  />
                </div>
                <div className={styles.donatePrice}>
                  <h1>$ 10.00</h1>
                  <small>&nbsp;usd</small>
                </div>
                <div>
                  <h3 className={styles.donateListHead}>Coming Soon</h3>
                  <p>Supportive +</p>
                  <div className={styles.donateList}>
                    <p>Facebook</p>
                    <p>Study and discuss with others</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.donateCardHead}>
                  <h1>Member</h1>
                  <HiOutlineQuestionMarkCircle
                    onClick={() => setMember(!member)}
                    className={styles.donateInfo}
                  />
                </div>
                <div>
                  <div className={styles.donateList}>
                    <p>
                      With your support I can keep this site up to date and up
                      and running. <span className={styles.donateHL}>Coming soon.</span>
                    </p>
                    <p>
                      Join the Facebook group and enjoy all it has to offer.
                    </p>
                  </div>
                </div>
              </>
            )}
            <button
              role='link'
              disabled={!session && !loading}
              onClick={redirectToCheckoutBasic}
              className={styles.donateBtn}>
              {session ? 'Support' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDonate;
