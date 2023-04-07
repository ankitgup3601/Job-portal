import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [background, setBackground] = useState('home');
  return (
    <div className='nav_layout'>
        <div className='nav_heading'>
            <h1>Job Portal</h1>
        </div>
        <div className='nav_content' style={{display : 'flex', gap : "20px"}}>
            <Link className='btn' to="/" style={{backgroundColor : background == 'home' && "#bc4123"}} onClick= {()=> setBackground('home')}>Home</Link>
            <Link className='btn' to='/about' style={{backgroundColor : background == 'about' && "#bc4123"}} onClick= {()=> setBackground('about')}>About</Link>
            <Link className='btn' to='/help' style={{backgroundColor : background == 'help' && "#bc4123"}} onClick= {()=> setBackground('help')}>Help</Link>
            <Link className='btn' to='/careers' style={{backgroundColor : background == 'career' && "#bc4123"}} onClick= {()=> setBackground('career')}>Careers</Link>
        </div>
    </div>)
}

export default Navbar