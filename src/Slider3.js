import React from 'react'
import './Slider3.css'

const Slider3 = () => {
  return (
    <div className='slider3'>
        <div className='slider3-content content'>
            <div className='blur-content'>
                <h1>FOCUS</h1>
            </div>
            <div className='main-content'>
                <p>FOCUS</p>
                <h1 className='black-line'>
                We are focused on
                </h1>
                <h3 className='orange-line'>
                Healthcare, Education,<br/> Environment, & <br/>Technology
                </h3>
                <div className='dash'></div>
            </div>
        </div>
        
        <div className='img-card'>
            <div className='img-back1'></div>
            <div className='img-back2'></div>
            <div className='img-text'>
                <h1><span>H</span>ealth</h1>
                <h1><span>E</span>ducation</h1>
                <h1><span>E</span>nviroment</h1>
                <h1><span>D</span>eep Tech</h1>
            </div>
        </div>
    </div>
  )
}

export default Slider3