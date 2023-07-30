import React  from 'react'
import './searchbox.css'

function Searchbox({ searchChange}) {
  
  return (
    <div className='search'>
      <input placeholder='search a product'
       onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox
