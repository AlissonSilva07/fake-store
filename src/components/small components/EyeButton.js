import React from 'react'

import { FaRegEye } from 'react-icons/fa'

const EyeButton = () => {

  return (
        <button className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-fuchsia-900 hover:border-fuchsia-700'>
            <FaRegEye className='text-2xl text-fuchsia-900 hover:text-fuchsia-700' />
        </button>    
  )
}

export default EyeButton
