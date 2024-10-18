// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2xqwU8J2nipbStRYC3s7gvmINjmR3b3c',
  authDomain: 'streamgpt-eeb96.firebaseapp.com',
  projectId: 'streamgpt-eeb96',
  storageBucket: 'streamgpt-eeb96.appspot.com',
  messagingSenderId: '305924551395',
  appId: '1:305924551395:web:79fe219efea9edac10cbd6',
  measurementId: 'G-N5SZQ8BWEH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
