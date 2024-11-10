import React, { useContext } from 'react'
import ProductList from './ProductList'
import { StoreContext } from '../context/StoreConext'

const Main = () => {
  const {showCart} = useContext(StoreContext)
  return (
    <div className={`p-8 ${showCart ? 'flex-1' : 'w-full' } overflow-y-scroll`}>
        <h1 className='text-3xl font-bold pb-4'>Products</h1>
        <ProductList/>
    </div>
  )
}

export default Main