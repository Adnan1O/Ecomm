import React from 'react'
import { Link } from 'react-router-dom'
import "./Dropdown.css"

function Dropdown() {
    return (
      <div >
        <div className='dropdown'>
          <p className='cat'>Categories</p>
          <div className='list-items'>
              <p> <Link to="/product/cpu">CPU</Link></p>
              <p> <Link to="/product2">GPU</Link></p>
              <p>Ram</p>
              <p>Motherboard</p>
              <p>Power supply</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Dropdown
