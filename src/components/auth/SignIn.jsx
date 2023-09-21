import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ updateUserState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        
        // Call the callback function to update the user state in the parent component
        updateUserState(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log in to your Account</h1>
        <input className="input-box"
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input className="input-box"
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn-click" type='submit' onClick={signIn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
