import React from 'react'

import { Link } from 'react-router-dom';

import { AiOutlineHeart} from 'react-icons/ai'
import EyeButton from './small components/EyeButton';

const ProductsGrid = ( { productsData } ) => {

  return (
    <>
    <div className='grid grid-flow-row grid-cols-4 gap-4 py-4 pl-4'>
      {productsData.length > 0 && productsData.map((product) => {
          return(
              <div className='flex flex-col w-full gap-2 p-4 items-center bg-white rounded-2xl shadow-xl overflow-hidden border relative z-0'>
                  <button className='text-center p-1 border hover:shadow-md rounded-full absolute top-2 right-2 z-40'>
                    <AiOutlineHeart className='text-xl text-fuchsia-900' />
                  </button>
                 

                  <div className='w-full flex flex-col items-center gap-4' key={product.id}>
                    <div>
                      <img src={product.image} alt="" className='w-40 h-40 object-contain' />
                    </div>
                    <div className='w-full'>
                      <div>
                        <p className='text-xs text-fuchsia-900 font-bold'>{product.category}</p>
                      </div>
                      <div>
                        <p className='w-full text-ellipsis overflow-hidden line-clamp-1 text-base text-black'>{product.title}</p>
                      </div>
                      <div className='flex align-top'>
                        <div>
                          <span className='text-sm'>$</span>
                        </div>
                        <div>
                          <p className='text-3xl font-bold'>{product.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='w-full flex items-center gap-1'>
                    <button className='w-full bg-fuchsia-900 py-1 px-4 text-white text-base font-bold rounded-full hover:bg-fuchsia-800'>Add to Cart</button>
                    <Link to={`/products/${product.id}`}>
                      <EyeButton />
                    </Link>
                  </div>
                </div>
          )})}
          </div>
    </>
  )
}

export default ProductsGrid
