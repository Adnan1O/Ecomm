import React from 'react'
import './footer.css'
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {GrYoutube} from "react-icons/gr";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div >
      <div className='footer'>
      <div className='pages'>
          <p><Link to='/'>home</Link></p>
          <p><Link to="/product/cpu">products</Link></p>
          <p><Link to="/about">about</Link></p>
          <p><Link>contact</Link></p>
       
      </div>
      
        <div className='icons'>
      <Link to='https://www.facebook.com/' 
      target="_blank"
      ><FaFacebook/></Link>

      <Link to="https://www.instagram.com/"
      target="_blank"
      ><AiFillInstagram/></Link>
      <Link to="https://www.youtube.com/"
      target="_blank"
      ><GrYoutube/></Link>
      <Link to="https://mail.google.com/mail"
      target="_blank"> <SiGmail/></Link>
    
    
      </div>
      </div>
      <div className='copy'>
        <p>all rights reserved my ecommerce.com</p>
        </div>
    
    </div>
  )
}

export default Footer
