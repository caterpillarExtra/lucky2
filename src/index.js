import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDH1SUzizX2w-Dxt3K1EYV8k2J-oIEzMoo",
    authDomain: "lucky2-4fbcf.firebaseapp.com",
    projectId: "lucky2-4fbcf",
    storageBucket: "lucky2-4fbcf.appspot.com",
    messagingSenderId: "158697506044",
    appId: "1:158697506044:web:c639950255836a12a18379",
    measurementId: "G-DG4L1ZLWB5"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
