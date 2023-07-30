import React from 'react'
import "./about.css"
import about from '../about.png'

function About() {
  return (
    
    <div className='main-div'>
      <div className='space'></div>
      <div className='content'>   
      <br/>
          <h2>About</h2>
          <img className='about-img' src={about} alt="d"/>
      <p>Header image: A high-quality photo of a beautifully lit candle in a glass jar, with a warm and cozy background.<br/>

Introduction: "Welcome to our handmade candle shop! We are passionate about creating unique and high-quality candles that not only fill your home with beautiful scents, but also make for great gifts or decorative pieces. All of our candles are hand-poured in small batches using natural ingredients and essential oils."<br/>

Featured candles: A section featuring some of the shop's most popular scents and styles of candles, with images and descriptions of each. For example:<br/><br/>

Lavender and Vanilla: A soothing blend of lavender and sweet vanilla, perfect for unwinding after a long day.
Citrus Grove: A bright and refreshing scent, featuring grapefruit and lemon essential oils.
Cinnamon Spice: A warm and cozy scent, with hints of cinnamon, nutmeg, and cloves.
Shop policies: Information about the shop's shipping and return policies, as well as a contact form or email address for customer inquiries.<br/><br/>

Testimonials: A section featuring reviews and testimonials from happy customers, with quotes and star ratings.

Call to action: A button or link encouraging visitors to browse the full collection of candles and make a purchase. For example, "Shop now and fill your home with beautiful scents!"<br/><br/>




</p>
</div>
<div className='space'></div>
    </div>
  )
}

export default About
