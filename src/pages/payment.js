import React from 'react'
import './payment.css'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../components/checkoutproduct'
// import { useStripe } from '@stripe/react-stripe-js';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import {getBasketTotal} from '../reducer';
import axios from "axios";


function Payment() {
  const [{ basket ,user}, dispatch] = useStateValue();



  const payment = async(token)=>{
    await axios.post("http://localhost:4000/pay",{
      amount: getBasketTotal(basket) * 100,
      token: token,
    });
  }
  return (
    <div className='payment_page'>
       
        <h2>{`payment page (${basket.length} items)`} </h2>
        <div className='address'>       
           <h6>  {user?.email}<br/>
      newyork streets, <br/> 
      usa 48480</h6>     
          <button className='add'>Another address</button>       
        </div>
    <div className='review_products'>
      <h5>Review products and make payment</h5>
      {basket.map((item=>(
        <CheckoutProduct
        key = {item.id}
        id ={item.id}
        image ={item.image}
        brand={item.brand}
        name={item.name}
        price={item.price}
        />
   )))}  
    </div>
        <div className='select_payment'>
        <h6>payment method</h6>
        
          {
              <div className='stripe-btn'>
             <StripeCheckout
        token={payment}
        stripeKey="pk_test_51MqezqSD3V1peBOmqF0prWXcTrFaX6PYS20GjhQa1RMa59dfd5eHFTMf5l7tEqM8wUWRc132hOV196lbXBQsB8O700Zfo0u4t3"
        name='Ecommerce'
        amount={getBasketTotal(basket) * 100}
        label='pay to Ecommerce'
        description= {`your subtotal: $${getBasketTotal(basket)}`}
            />  
    
            </div> 
             
          }
      
        </div>
    </div>
  )
}

export default Payment
