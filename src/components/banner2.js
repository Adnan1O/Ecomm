import React from 'react'
import banner from '../banner.jpg'
import './banner2.css'
import { Link } from 'react-router-dom'

function newBanner() {
  return (
    <div className='banner_start'>
        <img className='banner_1' src={banner} alt='banner' height={460} width={780} />
        <h5 style={{marginTop:"10px"}}>"Build your dream machine with us."</h5>
        <button> <Link to="/catogeries">ShopNow</Link> </button>
    </div>
  )
}

export default newBanner
