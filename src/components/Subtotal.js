import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../StateProvider';
import {getBasketTotal} from '../reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
  return (
    <div className='box'>
        
         <h6>{`(total items: ${basket.length})`}</h6>
         <h6>{`your subtotal: $${getBasketTotal(basket)}`}</h6>
    </div>
  )
}

export default Subtotal
