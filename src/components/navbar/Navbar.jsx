import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

// BEM -> bLOCK 
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar_links_logo'>
          <img src={logo} alt='logo' />
          <div className='gpt3__navbar-links_container'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>What is GPT3</a></p>
            <p><a href='#possobility'>Open AI</a></p>
            <p><a href='#home'>Case studies</a></p>
            <p><a href='#home'>Library</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
