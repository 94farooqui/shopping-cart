import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreConext'

const TotalPrice = () => {
    const {cartItems} = useContext(StoreContext)

    const calculateTotal = () => {
        const total = cartItems.reduce((total,product) => total + (product.price*product.quantity),0)
        console.log(total)
        return total.toFixed(2)
      }

    if(!cartItems.length > 0){
        return <p>0</p>
    }
  return (
    <div className='py-4 bg-teal-900 text-white px-4 text-2xl flex justify-between mt-2'>
          <h1>Total</h1>
          <p>${calculateTotal()}</p>
        </div>
  )
}

export default TotalPrice