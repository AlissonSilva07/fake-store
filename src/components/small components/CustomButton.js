import React from 'react'

const CustomButton = ( { text } ) => {
  return (
    <button className='bg-fuchsia-900 w-full py-2 px-4 text-white border-2 border-fuchsia-900 hover:bg-fuchsia-700 hover:border-fuchsia-700 font-bold rounded-full'>
        {text}
    </button>
  )
}

export default CustomButton
