import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreConext'
import { Link, useNavigate } from 'react-router-dom'

const Topbar = () => {
    const navigate = useNavigate()
    const {setShowCart,showCart} = useContext(StoreContext)
    const handleCartShow = () => {
        navigate('/cart')
    }
  return (
    <div className='w-screen h-16 bg-teal-900 p-4 text-white'>
        <div className='flex w-[1280px] mx-auto justify-between items-center'>
            <Link to='/'><h1 className='text-2xl font-bold'>MX Store</h1></Link>
            <div>
                <ul className='flex gap-6'>
                    <li onClick={()=>handleCartShow()} className='hover:cursor-pointer'>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Topbar