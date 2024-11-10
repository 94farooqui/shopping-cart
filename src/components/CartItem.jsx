import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreConext'

const CartItem = ({product}) => {
    const [itemQuantity, setItemQuantity] = useState()
    const {cartItems,setCartItems} = useContext(StoreContext)

    const handleOneMore = () => {
        setCartItems(cartItems.map(item => item.id === product.id? {...item, quantity: item.quantity+1}: item))
        console.log(cartItems)
    }

    const handleOneLess = () => {
        setCartItems(cartItems.map(item => item.id === product.id? {...item, quantity: item.quantity-1}: item))
    }
  return (
    <div className='flex gap-2 items-center p-4 shadow-sm'>
        <div>
            <img className='w-20 h-16 object-cover' src={product.image} />
        </div>
        <div className='flex-1 flex flex-col'>
            <p className='font-bold font-sm'>{product.name}</p>
            <p className='text-xs'>{product.price}</p>
            <div className='flex gap-1 text-sm'><button onClick={handleOneLess} className={`bg-slate-200 px-1  `} disabled={product.quantity===1}>-</button> <p>{product.quantity}</p> <button onClick={handleOneMore} className='bg-slate-200 px-1'>+</button></div>
        </div>
        <div>
            <p className='text-xl font-bold'>{(product.price * product.quantity).toFixed(2)}</p>
        </div>

    </div>
  )
}

export default CartItem