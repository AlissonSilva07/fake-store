import React from 'react'

import { Link } from 'react-router-dom'

import mainImg2 from '../imgs/fashionable-woman-using-cellphone-with-holding-colorful-paper-bag-eyeglasses_23-2148101603.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import StandardButton from './small components/StandardButton'


const PageHero = () => {
  return (
    <div className='mt-20 w-full flex flex-col items-center'>
        <div>
            <img src={mainImg2} alt="hands choosing a category while shopping" className='w-full' />
        </div>

        <div className='p-8 bg-fuchsia-900 overflow-hidden'>            
            <div className='flex flex-col items-center gap-4'>
                <div>
                    <p className='text-4xl text-white text-center font-bold'>Choose what's best for you wherever you are.</p>
                </div>
                <div>
                    <p className='text-white text-base text-justify'>Got no time to go outside and shop for you next look? Our website provides you with a variety of clothes from various brands and makes. It's like walking into a real store.</p>
                </div>
                <div className='w-full flex flex-col items-center gap-4'>
                    <Link to='/products'>
                        <StandardButton text='See all products' />
                    </Link>
                    <p className='text-white font-bold'>or</p>
                    <div href='#' className='bg-fuchsia-900 text-white font-bold flex items-center gap-2'>
                        <p>Browse by category</p>
                        <AiOutlineArrowDown className='text-xl motion-safe:animate-bounce' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PageHero
