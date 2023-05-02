import React from 'react'

const StandardButton = ( { text } ) => {
  return (
    <button className='bg-white w-full py-2 px-4 text-fuchsia-900 border-2 border-fuchsia-900 hover:text-white hover:border-white hover:bg-fuchsia-900 font-bold rounded-full'>
        {text}
    </button>
  )
}

export default StandardButton
