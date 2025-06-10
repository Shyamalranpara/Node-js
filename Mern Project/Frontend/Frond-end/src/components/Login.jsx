import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder='enter the email' onChange={(e)=>setEmail(e.target.value)}/>

      <input type="password" placeholder='enter the password' onChange={(e)=>setPassword(e.target.value)}/>

      <Link to={"/register"} >Register ?</Link>
    </div>
  );
}