
import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ updateUserState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        
        // Call the callback function to update the user state in the parent component
        updateUserState(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input className="input-box"
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
        className="input-box"
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button class="btn-click" type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
