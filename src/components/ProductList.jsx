import React from 'react'
import {products} from './../data/itemsData'
import Product from './Product'

const ProductList = () => {
  return (
    <div>
        <div className='grid grid-cols-4 gap-4'>
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default ProductList