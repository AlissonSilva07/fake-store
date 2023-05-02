import React from 'react'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'

const GoBackButton = ( { text } ) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate('/products')
  }

  return (
    <button onClick={handleNavigate} className='bg-fuchsia-900 py-2 px-4 flex items-center gap-2 text-white border-2 border-fuchsia-900 hover:text-fuchsia-900 hover:border-fuchsia-900 hover:bg-white font-bold rounded-full'>
        <AiOutlineArrowLeft className='text-xl' />
        <p>{text}</p>
    </button>
  )
}

export default GoBackButton
