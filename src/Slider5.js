import React from 'react'
import './Slider5.css'
import { FaBookOpen } from 'react-icons/fa';

const Slider5 = () => {
  return (
    <div className='slider5'>
        <div className='overlay'>
            <div className='main-content'>
                <p className='topic'>RESEARCH & DEVELOPMENT</p>
                <p className='title1'>
                Collaborative Transformation To Change The <br/>Industry
                </p>
                <p className='title2'>
                LEARN MORE ABOUT SPOTFLOCK'S COLLABORATIVE
                </p>
                <h6 className='title3'>ACADEMIA R&D</h6>
            </div>
            <div className='colab-btn'>
            <p>COLLABORATIVE RESEARCH  <FaBookOpen/></p>
            </div>
        </div>
    </div>
  )
}

export default Slider5