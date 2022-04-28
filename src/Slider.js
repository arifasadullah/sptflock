import React from 'react'
import Nav from './Nav'
import "./Slider.css"

const Slider = () => {
  return (
    <div className='slider'>
        <div className='nav'>
            <Nav/>
        </div>
        <div className='dialogue'>
            <p className='line1'>ENTERPRISE DEEP TECHNOLOGY SUITE</p>
            <h1 className='line2'>SPOTLOCK STUDIO</h1>
            <p className='line3'>CLOUD ENABLED ARTIFICIAL</p>
            <p className='line4'>INTELLIGENCE, BLOCKCHAIN, IoT</p>
            <p className='line5'>PLATFORM ON STEROIDS</p>
        </div>   
    </div>
  )
}

export default Slider