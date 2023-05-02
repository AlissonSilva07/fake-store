import React from 'react'

import {AiOutlineArrowUp} from 'react-icons/ai'

const BackToTop = ( { handleClick } ) => {
  return (
    <>
        <button onClick={handleClick} className='fixed bottom-10 right-10 w-16 h-16 flex flex-col items-center justify-center bg-white border-2 border-fuchsia-900 rounded-full p-2 z-50'>
            <AiOutlineArrowUp className='text-3xl font-bold text-fuchsia-900' />
        </button>
    </>
  )
}

export default BackToTop
