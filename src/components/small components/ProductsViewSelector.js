import React from 'react'

import {BsGrid} from 'react-icons/bs'
import {CiGrid2H} from 'react-icons/ci'

const ProductsViewSelector = ( {onClickGrid, onClickList} ) => {
  return (
    <>
      <div className='flex items-center'>
        <div className='mr-2'>
            <p>View:</p>
        </div>
        <div>
            <button onClick={onClickGrid} className='py-1 px-2 rounded-l-full hover:bg-fuchsia-800 transition-all delay-75'>
                <BsGrid className='text-2xl text-white' />
            </button>
        </div>
        <div>
            <button onClick={onClickList} className='p-1 px-2 rounded-r-full hover:bg-fuchsia-800 transition-all delay-75'>
                <CiGrid2H className='text-2xl text-white' />
            </button>
        </div>
      </div>
    </>
  )
}

export default ProductsViewSelector
