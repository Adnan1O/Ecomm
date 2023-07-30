import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, image, brand, name, price}) {
  const [, dispatch] = useStateValue();

  const RemoveFromBasket=()=>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  }
  return (
    <div>
        
      <div className='cart-start'>
      <img className='img'  src={image} alt='imges' />
      <div className='text-area'>  
        <h5 className='p-name'>{name}</h5>
      <h6 className='b-name'>{brand}</h6> 
      <h5 className='price'>{`$${price}`}</h5>
      <button onClick={RemoveFromBasket} >Delete</button>
      </div>
      
      {/* <input type='number' 
      min="1"
      max="3"
      className='quantity'/> */}
      </div>
     
      </div>
   
  )
}

export default CheckoutProduct;