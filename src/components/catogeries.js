import React from 'react'
import Catcomponent from './Catcomponent';
import {Catdb} from './catdb';
import "./categories.css"
import { Link } from 'react-router-dom';
const Catogeries=()=> {
  return (
    <div className='div-f'>
      <h2>categories</h2>
      <Link to="/product/cpu" ><Catcomponent Catdb={Catdb}/></Link>  
 
    </div>
  )
}

export default Catogeries
