import React, { useEffect } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Main = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/')
  }, [])
  return (
    <div>
        <Navbar/>
        <main className='navbar_main'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Main