import React from 'react'

import { RiMenLine, RiWomenLine, RiDeviceLine } from 'react-icons/ri'
import { SlDiamond } from 'react-icons/sl'

const Categories = () => {

  return (
    <div className='w-full flex flex-col items-center'>

        <button className='w-full flex items-center p-4 bg-fuchsia-900 h-20 rounded-xl border-4 border-white text-white hover:text-fuchsia-900 hover:bg-white hover:border-fuchsia-900 transition-all delay-75 relative overflow-hidden'>
            <div>
                <RiMenLine className='text-8xl absolute top-1 right-2' />
            </div>
            <p className='text-xl font-bold'>For Men</p>
        </button>

        <button className='w-full flex items-center p-4 bg-fuchsia-900 h-20 rounded-xl border-4 border-white text-white hover:text-fuchsia-900 hover:bg-white hover:border-fuchsia-900 transition-all delay-75 relative overflow-hidden'>
            <div>
                <RiWomenLine className='text-8xl absolute bottom-1 right-1   ' />
            </div>
            <p className='text-xl font-bold'>For Women</p>
        </button>

        <button className='w-full flex items-center p-4 bg-fuchsia-900 h-20 rounded-xl border-4 border-white text-white hover:text-fuchsia-900 hover:bg-white hover:border-fuchsia-900 transition-all delay-75 relative overflow-hidden'>
            <div>
                <RiDeviceLine className='text-8xl absolute top-1 right-2' />
            </div>
            <p className='text-xl font-bold'>Electronics</p>
        </button>

        <button className='w-full flex items-center p-4 bg-fuchsia-900 h-20 rounded-xl border-4 border-white text-white hover:text-fuchsia-900 hover:bg-white hover:border-fuchsia-900 transition-all delay-75 relative overflow-hidden'>
            <div>
                <SlDiamond className='text-8xl absolute -bottom-1 right-1   ' />
            </div>
            <p className='text-xl font-bold'>Jewelery</p>
        </button>

    </div>
  )
}

export default Categories
