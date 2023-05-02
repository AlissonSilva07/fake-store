import React from 'react'

import logoImg from './logo.png'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <img className='w-20 animate-bounce' src={logoImg} alt="fakestore.com website logo" />
      <p className='text-xl text-fuchsia-900 font-bold mt-2'>Loading</p>
    </div>
  )
}

export default Loading
