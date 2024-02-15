import React from 'react'

import { AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductsListing = ({productsData}) => {
    
  return (
    <>
      <div className='flex flex-col gap-4 py-4 z-0'>
      {productsData.length > 0 && productsData.map((product) => {
          return (
              <div className='flex flex-col w-full gap-2 p-4 items-center bg-white rounded-2xl shadow-xl overflow-hidden border relative z-0'>

                <div className='absolute top-4 right-4 border p-1 hover:shadow-md rounded-lg'>
                    <AiOutlineHeart className='text-2xl text-fuchsia-900' />
                </div>
                <div className='absolute top-16 right-4 border p-1 hover:shadow-md rounded-lg'>
                    <AiOutlineShoppingCart className='text-2xl text-fuchsia-900' />
                </div>

                <div className='w-full flex items-start'>
                    <div className='flex items-start gap-4' key={product.id}>
                        <div>
                            <img src={product.image} alt="" className='w-60 h-60 object-contain' />
                        </div>
                        <div className='flex flex-col p-4 gap-2 max-w-xl'>
                            <div>
                                <p className='text-fuchsia-900 text-xs font-bold'>{product.category}</p>
                            </div>
                            <div>
                                <p className='text-base font-bold'>{product.title}</p>
                            </div>
                            <div className='flex align-top'>
                                <div>
                                <span className='text-sm'>$</span>
                                </div>
                                <div>
                                <p className='text-3xl font-bold'>{product.price}</p>
                                </div>
                            </div>
                            <div className='line-clamp-3 text-justify'>
                                {product.description}
                            </div>
                            <div>
                                <Link to={`/products/${product.id}`}>
                                    <p className='font-bold text-fuchsia-900'>View details</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )})}
          </div>
    </>
  )
}

export default ProductsListing
