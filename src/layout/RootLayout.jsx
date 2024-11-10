import React from 'react'
import Cart from '../components/Cart'
import { Outlet } from 'react-router-dom'

const RootLayout = ({children}) => {
  return (
    <div className='w-screen h-screen flex relative'>
        <Outlet/>
    </div>
  )
}

export default RootLayout