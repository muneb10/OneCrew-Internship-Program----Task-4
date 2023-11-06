import React, { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../../firebase';

import './Signup.css';
import 'animate.css'

const auth = getAuth(app);

const SignupForm = (props) => {


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isSubmited, setSubmited] = useState(false);
  const [isCPasswordTouched, setIsCPasswordTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  function isEmailValid(email) {
    // Use a regular expression to check for the "@" symbol
    const emailPattern = /@/;
    return emailPattern.test(email);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailTouched(true);
  }
  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setIsPasswordTouched(true);
  }

  const cPasswordHandler = (event) => {
    setCPassword(event.target.value);
    setIsCPasswordTouched(true);

  }
  const createUserAccount = () => {
    createUserWithEmailAndPassword(auth, email, password);

  }
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveName(name);

    setSubmited(true);
    emptyTheData();


  }
  const emptyTheData = () => {
    setCPassword('');
    setEmail('');
    setPassword('');
  }
  const backHandler = () => {
    setSubmited(false);
  }
  return (
    //left section (image)
    <Fragment>

      <div className='flex ' >
        <div className='h-screen w-1/2 bg-blue-300'>
          <div className='h-screen bg-image '></div>
        </div>
        {/* right section (form) */}
        <div className='form h-screen flex flex-col justify-center items-center w-1/2 bg-slate-900 '>
          <div className='logo font-bold h-fit w-fit text-white text-5xl '>
            <h2>Welcome to <span className="text-blue-400 font-bold animate-continuous-glow">oneCrew</span></h2>
          </div>
          <form onSubmit={submitHandler} className=' shadow-lg shadow-cyan-600/50 p-4 w-1/2 h-xl mt-40px flex flex-col justify-center items-center rounded-xl '>
            <label className='text-yellow-300 mt-sm  text-2xl font-bold'>Create Your Account</label>
            <input className='p-3 mt-20px w-72 rounded-lg text-md ' type='text' placeholder='Username' onChange={nameHandler} value={name} required />
            <input className='p-3 mt-20px w-72 rounded-lg text-md ' type='email' placeholder='Email' onChange={emailHandler} value={email} required />
            {
              isEmailTouched &&
              email.trim().length >= 1 &&
              (email.includes('@') === false || email.includes('.') === false) &&
              <div className="text-red-500 mr-[210px] text-[12px] mt-1 font-bold">Invalid Email</div>

            }
            <input className='p-3 mt-20px w-72 rounded-lg text-md ' type='password' placeholder='Password' onChange={passwordHandler} value={password} required />
            {isPasswordTouched &&
              (password.trim().length === 0 || password.trim().length < 8) && (
                <div className='mt-2'>
                  <p className="text-red-500 mr-[160px] text-[12px] font-bold">
                    {password.trim().length === 0
                      ? <p>Password is required</p>
                      : <p className='mr-[-121px]'>Password length must be greater than 8</p>}
                  </p>
                </div>
              )}
            <input className='p-3 mt-20px w-72 rounded-lg text-md ' type='password' placeholder='Confirm Password' onChange={cPasswordHandler} value={cPassword} required />
            {isCPasswordTouched &&
              (cPassword.trim().length === 0 || cPassword.trim().length < 8) && (
                <div className='mt-2'>
                  <div className="text-red-500 mr-[160px] text-[12px]  font-bold">
                    {cPassword.trim().length === 0
                      ? <p>Password is required</p>
                      : <p className='mr-[-121px]'>Password length must be greater than 8</p>}
                  </div>
                </div>
              )}

            <button type='submit' className='font-bold p-3 mt-20px w-72 rounded-lg text-white bg-blue-500 hover:bg-blue-600 hover:text-yellow-400 transition duration-500 ease-out' onClick={createUserAccount}> Sign Up</button>
            <p className='cursor-pointer mt-10px text-white text-xs hover:text-yellow-300 transition duration-500 ease-out'><Link to="/">Already have an account?</Link></p>
          </form>
        </div>
        {isSubmited === true &&
          <div className=" fixed flex items-center justify-center bg-opacity-70 bg-black absolute inset-0">

            <div className=" animate__animated animate__zoomIn bg-slate-700 text-white rounded-xl w-4/3 p-6 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-4">Account Successfully Created</h2>
              <button onClick={backHandler}
                className="font-bold w-1/3 bg-yellow-400 text-black p-2 rounded font-bold hover:bg-yellow-500 transition duration-300">
                Okay
              </button>
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
};

export default SignupForm;