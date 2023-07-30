import React from 'react'
import "./catcard.css"

function Catcard(props) {
  return (
    <div className='cat-f'>
    <div className='main-d'>
      <div className='card-d'>
        <img src={props.image} alt=''/>
        <h5>{props.name}</h5>
        
      </div>
    </div>
    </div>
  )
}

export default Catcard
