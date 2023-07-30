import React, { useState } from 'react'
import './account.css'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Account() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount= (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user:", user);
      console.log(auth);
      navigate("/");
      // alert('You have successfully created an account')
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode)
      console.log(errorMessage)
    });
  }
  const loginAccount = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user:", user);
      console.log(auth);
      navigate("/");
      // alert('You have successfully logged in')
      // ...
    })
 
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode)
      console.log(errorMessage)
    });
  }


  return (
    <div className='body'>
      <h2>login or create an account</h2>
    <div className='input-class' >
     <input type='email'
     placeholder='youremail@gmail.com' 
     onChange={(e)=>setEmail(e.target.value)}
     />
     <input  type='password'
      placeholder='password'
      onChange={(e)=>setPassword(e.target.value)}
      />
     </div>
     <div className='button-class'>
     <button onClick={createAccount}>sign in</button>
      <button onClick={loginAccount}>login</button>
     </div>
    </div>
  )
}

export default Account
