import React, {useState} from 'react'

import {backendUrl} from "../../constants.js";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => setEmail(event.target.value);

  const onChangePassword = (event) => setPassword(event.target.value);

  const onSubmitForm = async () => {
    const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
    });

    const json = await response.json();
    localStorage.setItem("token", json.token);
  }

  return (
    <div id="login" className='flex-col'>
      <h1>Login</h1>
      <div className='signup-form'>
        <div className='subForm'>
          <label htmlFor="email">Email: </label>
          <input onChange={onChangeEmail} type="text" name='email' placeholder='Your Email' />
        </div>

        <div className='subForm'>
          <label htmlFor="password">Password: </label>
          <input onChange={onChangePassword} type="text" name='password' placeholder='Your Password' />
        </div>

        <button type="submit" id="test" onClick={onSubmitForm}>Login</button>
      </div>
    </div>
  )
}

export default Login ;