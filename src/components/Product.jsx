import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreConext'
import { useAsyncError } from 'react-router-dom'

const Product = ({product}) => {

    const {cartItems,setCartItems} = useContext(StoreContext)
    const [itemIndexInCart,setItemIndexInCart]=useState(-1)
    const [itemAdded,setItemAdded] = useState(false)

    useEffect(()=>{
        setItemIndexInCart(cartItems.findIndex(item => product.id === item.id))
    },[cartItems,itemAdded])

    const handleAddToCart = () => {
        const isAdded = cartItems?.find(cartItem => cartItem.id === product.id)
        if(isAdded){
            console.log("Quanity increased")
            setCartItems(cartItems.map(item => item.id === product.id? {...item, quantity: item.quantity+1}: item))
        }
        else {
            setItemAdded(true)
            setCartItems([...cartItems, {...product, quantity:1}])
    console.log("ITem added", cartItems)
}
        
    }
  return (
    <div className='relative flex flex-col justify-center items-center gap-2  bg-slate-50 border border-opacity-0 hover:border-opacity-50 rounded-lg overflow-hidden hover:border border-teal-600'>
        <div className='flex justify-center items-center p-2'>
        <img src={product.image} className='w-20 h-20 object-cover' />

        </div>
        <div className='w-full flex justify-between items-center px-4 bg-teal-100'>
        <div className='flex-1 flex flex-col items-start justify-between p-2'>
            <p className='font-bold'>{product.name}</p>
            <p className='text-sm opacity-80'>{product.price}</p>
        </div>
        <button onClick={handleAddToCart} className='bg-teal-900 text-white p-2 rounded-lg text-sm'>Add to Cart</button>
        </div>
       
       {itemIndexInCart>-1 && <span className='w-6 h-6 absolute top-4 right-4 rounded-full bg-teal-900 text-white font-bold text-sm text-center'>{cartItems[itemIndexInCart]?.quantity}</span>}
    </div>
  )
}

export default Product