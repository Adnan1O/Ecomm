 import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Productpage from './pages/productpage';
import About from './pages/about'
import Cart from './pages/cart'
import Account from './pages/account'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './pages/payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Productpage2 from './pages/productpage2';
import Catogeries from './components/catogeries';

const promise = loadStripe('pk_test_51MqezqSD3V1peBOmqF0prWXcTrFaX6PYS20GjhQa1RMa59dfd5eHFTMf5l7tEqM8wUWRc132hOV196lbXBQsB8O700Zfo0u4t3')

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(userCredential=>{
      console.log('The USER IS>>>', userCredential);

      if (userCredential) {
        dispatch({
          type:'SET_USER',
          user: userCredential
        })
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="App">   
      
     <Navbar/>
     <Elements stripe={promise}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/product/cpu" element={<Productpage/>} />
      <Route path="/product2" element={<Productpage2/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/account" element={<Account/>} />
       <Route path='/catogeries' element={<Catogeries/>}/>
      <Route path='/payment' element={<Payment/>}/>
    
     </Routes>
     </Elements>
     <Footer/>


     

      
            
    </div>
  );
}

export default App;
