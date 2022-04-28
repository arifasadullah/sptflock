import React from 'react'
import './Nav.css'
import { FaBraille } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaRssSquare } from 'react-icons/fa';
import { FaMagic } from 'react-icons/fa';


const Nav = () => {
  return (
    <div className='bar'>
     <div className='logo'>
      <img src='https://spotflock.com/wp-content/uploads/2019/01/logo-black.png' alt='logo'/>
    </div>  
    <div className='tabs'>
    <p className='tab prod'><FaBraille /> PRODUCTS</p>
    <p className='tab research'><FaFlask /> RESEARCH LAB</p>
    <p className='tab career'><FaFileAlt /> CAREER</p>
    <p className='tab blog'><FaRssSquare /> BLOG</p>
    <p className='tab about'><FaMagic /> ABOUT</p>
    <p className='tab contact'><FaRegEnvelope /> CONTACT US</p>
    </div> 
    </div>
  )
}

export default Nav