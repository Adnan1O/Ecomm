import React, {useState} from 'react'
import './newslatter.css'
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

function Newslatter() {

  const [email, setEmail] =  useState('')

  const   Submit=(e)=>{
    e.preventDefault()
    try {
      const docRef =  addDoc(collection(db, "newslatterEmail"), {
        email: {email},
    
      });
         console.log(email)
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return (
    <div className='news'>
        <h5>join our newslatter to get daily updates</h5><br></br>
      <input
       type='email'
       placeholder='Youremail@gmail.com'
      onChange={(e)=>setEmail(e.target.value)}
      />
      <button className='submit_btn' onClick={Submit}>Submit</button>
    </div>
  )
}

export default Newslatter
