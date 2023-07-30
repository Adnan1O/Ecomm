import React from 'react'
import "./navbar.css"
import {CgShoppingBag} from "react-icons/cg";
import { Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import Dropdown from './dropdown/Dropdown';


const Navbar = () => {
  const [{user, basket} ] = useStateValue();
  const handleAuth=()=>{
    if (user){
      auth.signOut();
    }

  }
  
  return (
   
    <div className='nav'>
     <h1 className='logo'> <Link to="/" >Eco.</Link></h1>
      <ul className='nav-items'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/product/cpu" >products</Link></li>
        <li><Link to="/about">about</Link></li> 
        <li><Link to="/catogeries"><Dropdown/></Link></li>
        <li ><Link to="/cart"><CgShoppingBag className='shop'/></Link></li>
        {/* <span className='num'><Link to="/cart">{basket?.length}</Link></span> */}
        
      </ul>
      <div className='side-area'>
        <button onClick={handleAuth} className='span'>
          <Link to={!user && '/account'}> {user? 'Sign Out' : 'Login'}</Link>
         </button>
      </div>
    </div> 
  

    
  )
}

export default Navbar;
