import React from 'react'


import logoImg from '../imgs/logo.png'

const UnderDevelopment = () => {
  return (
    <div className='w-full h-full p-8 gap-4 flex flex-col items-center border rounded-xl shadow-xl overflow-hidden'>
        <img src={logoImg} alt="company logo" className='w-20' />
        <p className='text-2xl font-bold'>We're sorry.</p>
        <p className='text-xl text-center text-fuchsia-900 font-bold'>This page is under development.</p>
        <p className='text-xl'>But we'll get to you pretty soon!</p>
    </div>
  )
}

export default UnderDevelopment
