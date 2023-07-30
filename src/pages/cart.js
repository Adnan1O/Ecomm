import React from 'react'
import './cart.css'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../components/checkoutproduct';
import Subtotal from '../components/Subtotal';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [{basket, user}] = useStateValue();
  return (
    <div style={{minHeight:"385px"}}>
      
      
       <h2 className='title'>Cart</h2>
       <h6 className='email'> {user? `Hey, ${user.email}` : ''} </h6>
       <div className='checkout_btn'>
      {basket?.map((item=>(
        <CheckoutProduct
        key = {item.id}
        id ={item.id}
        image ={item.image}
        brand={item.brand}
        name={item.name}
        price={item.price}
        />
      )))}
    <div className='subtotal'>
       <Subtotal/>
     </div>
    <button onClick={(e)=> navigate('/payment')} className='btn-c'>checkout</button>
   </div>
       
    </div>
  )
}

export default Cart
