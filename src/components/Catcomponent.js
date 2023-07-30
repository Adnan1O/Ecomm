import React from 'react'
import Catcard from "../components/catcard"


const Catcomponent =({Catdb})=> {

  return (
    <div className='card-list'> 
    { Catdb.map((Catdb=>(  
    <Catcard key={Catdb.id} 
      id={Catdb.id} 
    image={Catdb.image} 
    name={Catdb.name} 
 />)
))}
    </div>
  );
};

export default Catcomponent
