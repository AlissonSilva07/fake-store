import React from 'react'

import { BsCheck2 } from 'react-icons/bs'

const InStock = () => {
  return (
    <>
      <div className='flex items-center gap-2 text-fuchsia-900 font-bold'>
        <div>
            <BsCheck2 className='text-xl' />
        </div>
        <div>
            <p>In stock</p>
        </div>
      </div>
    </>
  )
}

export default InStock
