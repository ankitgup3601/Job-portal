import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className='error_section'>
        <h1>Uh oh! {" "}Seems you're trying to access an invalid page &#128543; </h1>
        <div className='error_opt'>
        <Link to='/' className='btn--dark err-btn'>Go Home</Link>
        <Link className='btn--dark err-btn' onClick={()=> navigate(-1)}>Go Back</Link>
        </div>
    </div>
  )
}

export default Error