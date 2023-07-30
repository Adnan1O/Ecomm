import React from 'react'
import "./card.css"
import {CgShoppingBag} from "react-icons/cg";
import { useStateValue } from '../StateProvider';



const Card = (props) => {
  const [, dispatch] = useStateValue();
  const addToBasket =()=>{
   dispatch({
    type: 'ADD_TO_BASKET',
    item:{
       key : props.id,
      id : props.id,
      image : props.image,
      brand: props.brand,
      name:  props.name,
      price: props.price,
    }
 })
   
  };

  return (
  <div className='list'>
   <div className='card'>
    <img src={props.image}  alt='img' height={140}/>
    <div className='text'>
      <span>{props.brand}</span>
      <h5>{props.name}</h5>
     
      <div>
     
      <h6>{`$${props.price}`}</h6>
      <CgShoppingBag className='cart-btn' onClick={addToBasket}/>
</div>      
  </div>
   </div> 
    </div>
  )
}

export default Card;