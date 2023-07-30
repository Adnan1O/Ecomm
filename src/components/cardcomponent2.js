import React from 'react'
import Card from './card';
import './cardcomponent.css'



const Cardcomponent2 = ({Detail}) => { 

  return (
    <div className='card-list'> 
    { Detail.map((Detail=>(  
    <Card key={Detail.id} 
      id={Detail.id} 
    image={Detail.image} 
    brand={Detail.brand}
    name={Detail.name} 
    price={Detail.price} />)
))}
    </div>
  );
};

export default Cardcomponent2

