import React from 'react'

const CustomButton = ( { text } ) => {
  return (
    <button className='bg-white w-full py-2 px-4 text-fuchsia-900 border-2 border-fuchsia-900 hover:border-fuchsia-700 hover:text-fuchsia-700 font-bold rounded-full'>
        {text}
    </button>
  )
}

export default CustomButton
