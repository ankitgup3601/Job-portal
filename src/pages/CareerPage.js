import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerPage = () => {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default CareerPage