import React from 'react'
import ProductsViewSelector from './small components/ProductsViewSelector'

const ProductsBar = ({productsData , onClickGrid, onClickList}) => {
  return (
    <>
    <div className='z-20'>
      {productsData.length > 0 && (
        <div className='flex items-center 
        justify-between 
        bg-fuchsia-900 
        w-auto 
        py-2 
        px-6 
        mx-4 
        text-white 
        text-base 
        font-bold 
        rounded-xl 
        shadow-sm'>

          <div>
            <p>Total items: {productsData.length}</p>
          </div>

          <div>
            <ProductsViewSelector onClickGrid={onClickGrid} onClickList={onClickList} />
          </div>
        </div>
        )}
    </div>
    </>
  )
}

export default ProductsBar
