import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app'; // Import the Firebase core module
import 'firebase/auth'; // Import Firebase Authentication module
import firebaseConfig from '../firebaseConfig.js'; // Import your Firebase configuration
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

firebase.initializeApp(firebaseConfig);

const stripePromise = loadStripe('pk_test_51NkgvfLyF1hITntDKT3V6OFvlzBoIlx0eB8OEAB7kRdjnNj5Xs7CCGc84dBogb0NZnS5hmsRZ8RoCcBjp0VnMRvD009ZHWoUCT');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51NkgvfLyF1hITntDp07ACEyTotPdmK6W5JxvqTSD2IzoiUVc2ruttSwyQstGqYdaw68r88uzh4xbAVbYjFFuWueJ00m0lnaEdx',
  };

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise} options={options}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};