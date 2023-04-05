import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav_layout'>
        <div className='nav_heading'>
            <h1>Job Portal</h1>
        </div>
        <div className='nav_content' style={{display : 'flex', gap : "20px"}}>
            <Link className='btn'>Home</Link>
            <Link className='btn'>About</Link>
            <Link className='btn'>Help</Link>
            <Link className='btn'>Careers</Link>
        </div>
    </div>
  )
}

export default Navbar