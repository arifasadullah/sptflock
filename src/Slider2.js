import React from 'react'
import "./Slider2.css"
import groupimg from "./group.jpeg";

const Slider2 = () => {
  return (
    <div className=' slider2'>
        <div className='content'>
            <p>WHAT WE DO?</p>
            <h2>
            We make high quality IT <br/>products with cutting<br/>edge technologies that<br/>are intelligent,<br/> transparent, and ethical.<br/>Designed and built in<br/>India for the global<br/>market.
            </h2>
            <div className='dash'></div>
        </div>
        <div className='img-card'>
            <div className='img-back'>

            </div>
            <div className='img-pic'>
                <img src={groupimg} alt='group'/>
            </div>

        </div>

    </div>
  )
}

export default Slider2