import React, { useContext, useEffect, useState } from 'react'
import {products} from './../data/itemsData'
import CartItem from './CartItem'
import { StoreContext } from '../context/StoreConext'
import { IoMdClose } from "react-icons/io";
import TotalPrice from './TotalPrice';

const Cart = () => {
    const {cartItems, setCartItems,isCartEmpty,setIsCartEmpty,setShowCart,showCart,cartTotal} = useContext(StoreContext)
    


    useEffect(()=>{
        cartItems.length > 0 ? setIsCartEmpty(false)  : setIsCartEmpty(true)
    },[cartItems])

  return (
    <div>
    <div className={`w-[1280px] max-w-[1280px] h-[calc(100vh-64px)] mx-auto flex flex-col gap-4 overflow-y-scroll scrollbar-hidden bg-white`}>
        <div className='flex   p-4 items-center '>
        <h1 className='text-2xl font-bold text-steal-900'>Cart</h1>         
        </div>
        {!cartItems.length >0 ? <p>Cart is empty</p> :<div>
        <div className=' h-full overflow-y-scroll flex flex-col gap-2 border rounded-xl'>
            {cartItems.map(product => <CartItem key={product.id} product={product} />)}
        </div>
        <TotalPrice/>
        </div>}
    </div>
    </div>
  )
}

export default Cart