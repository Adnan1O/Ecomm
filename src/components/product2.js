import React, { Component} from 'react'
import Cardcomponent from './cardcomponent';
import {Detail2} from './details2'
import "./products.css"
import Searchbox from './searchbox';


class Product2 extends Component {
 constructor(){

  super()
  this.state = {
    Detail : Detail2,
    searchFeild:""
  } 
 }
 onSearchChange =(event) =>{
  this.setState({searchFeild: event.target.value})
 }
 render(){ 
  const filterDetail = this.state.Detail.filter(Detail =>{
    return Detail.name.toLowerCase().includes
    (this.state.searchFeild.toLowerCase())
  })
  
  return (
   <div>
    <h4>products</h4>
    <Searchbox searchChange={this.onSearchChange} />
    <div className='list'>
    <Cardcomponent Detail={filterDetail}/>
   </div>
   </div>
  )

}}


export default Product2;