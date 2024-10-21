import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidateData from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMesg, setErrorMesg] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMesg(message);
    if (message) return;
    // Sign in/up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesg('Email is already registered');
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesg('Email or Password is wrong');
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='relative h-screen flex flex-col items-center justify-center bg-black text-white'>
      <Header />
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg'
        alt='Background'
        className='absolute inset-0 w-full h-full object-cover opacity-50'
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='relative z-10 p-8 sm:w-3/6 md:w-3/12 bg-black bg-opacity-75 rounded shadow-lg'
      >
        <h1 className='text-3xl font-bold mb-6 '>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-3 m-2 w-full rounded bg-opacity-60 border border-gray-600 bg-gray-800 focus:outline-none focus:border-red-500'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email or Phone'
          className='p-3 m-2 w-full rounded bg-opacity-60 border border-gray-600 bg-gray-800 focus:outline-none focus:border-red-500'
        />
        {/* {!isSignInForm && (
          <input
            type='password'
            placeholder='Confirm Password'
            className='p-3 m-2 w-full rounded bg-opacity-60 border border-gray-600 bg-gray-800 focus:outline-none focus:border-red-500'
          />
        )} */}
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-3 m-2 w-full rounded bg-opacity-60 border border-gray-600 bg-gray-800 focus:outline-none focus:border-red-500'
        />
        <p className='text-red-500 my-1 font-semibold'>{errorMesg}</p>
        <button
          className='w-full p-3 m-2 bg-red-600 hover:bg-red-700 rounded transition duration-300'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign up now.'
            : 'Already registered? Sign In now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
