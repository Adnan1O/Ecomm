import React from 'react'
import banner from "../banner.png"
import "./banner.css"
import { Link } from 'react-router-dom';


function Banner() {
  return (
    <div>
        <div style={{
        display:"flex",
        justifyContent:"flex-end",
        marginRight:"20px", 
        padding:"15px"
     }}>
        <h1 style={{  marginBottom:"0px",textTransform: "lowercase"}}>
            Your One Stop Shop For All Computer Parts </h1>
        </div>
        <div style={{display:"flex"}}>
       <img src={banner} alt='ss' width={750}
       className='banner'
        style={{ 
        display:"flex",
        alignItems:"flex-start",
        marginLeft:"20px"
     }}/>
     <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
     <h1 style={{textTransform: "lowercase", marginLeft:"10px", lineHeight:"50px"}}>
       whatever your needs maybe we got you covered All the latest Gen Tech Is Here And We Are pleasure To Surve</h1>
        <button className='main-btn'><Link to='/product'>shop now</Link>  </button>
        </div>
     </div>   
    </div>
  )
}

export default Banner;
