import React, { useState } from "react";

import { backendUrl } from "../../constants.js";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id='sign-up' className='flex-col'>
      <h1>Signup</h1>
      <div className='signup-form'>
        <div className='sub-form'>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='text'
            name='email'
            placeholder='Your Email'
          />
        </div>

        <div className='sub-form'>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='Your Password'
          />
        </div>

        <button
          type='submit'
          id='test'
          onClick={async (e) => {
            const response = await fetch(`${backendUrl}/signup`, {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });

            const json = await response.json();
            console.log(json);
          }}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Signup;