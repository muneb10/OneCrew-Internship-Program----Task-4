import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const auth = getAuth(app);

const LoginForm = (props) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    props.onSaveEmail(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Redirect the user to the dashboard
        navigate('/dashboard');
        console.log(user);
      })
      .catch((error) => {
        // Handle login errors
        console.error(error.message);
      });
  };

  return (
    //left section (image)
    <Fragment>
      <div className='flex ' >
        <div className='h-screen w-1/2 bg-blue-300'>
          <div className='h-screen bg-image'></div>
        </div>
        {/* right section (form) */}
        <div className='form h-screen flex flex-col justify-center items-center w-1/2 bg-slate-900 '>
          <div className='logo font-bold h-fit w-fit text-white text-4xl '>
            <h2>Welcome Back to <span className="text-blue-400 font-bold animate-continuous-glow">oneCrew</span></h2>
          </div>
          <form className=' shadow-lg shadow-cyan-600/50 p-2 w-1/2 h-72 mt-40px flex flex-col justify-center items-center rounded-xl '>
            <label className='text-yellow-300 mt-sm  text-3xl font-bold'>Login</label>
            <input className='p-3 mt-20px w-72 rounded-lg text-md max-[1100]:w-40' type='email' placeholder='Email' value={email} onChange={emailHandler} />
            <input className='p-3 mt-20px w-72 rounded-lg text-md max-[1200]:w-10' type='password' placeholder='Password' value={password} onChange={passwordHandler} />

            <button onClick={handleLogin} type='submit' className=' font-bold p-3 mt-20px w-72 rounded-lg text-white bg-blue-500 hover:bg-blue-600  hover:text-yellow-400 transition duration-500 ease-out text-lg'>Sign in</button>
            <p className='cursor-pointer mt-10px text-white text-xs hover:text-yellow-300 transition duration-500 ease-out'><Link to="/signup">Doesn't have an account?</Link></p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;