import React from 'react'

import { Link } from 'react-router-dom'

import logoImg from '../imgs/logo.png'
import mainImg2 from '../imgs/fashionable-woman-using-cellphone-with-holding-colorful-paper-bag-eyeglasses_23-2148101603.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import StandardButton from './small components/StandardButton'


const PageHero = () => {
  return (
    <div className='flex items-center gap-4 bg-fuchsia-900 rounded-xl overflow-hidden'>
        <div>
            <img src={mainImg2} alt="hands choosing a category while shopping" className='w-[60rem]' />
        </div>
        <div className='w-[60rem] p-6 flex flex-col gap-4'>
            <div>
                <p className='text-xl text-white font-bold'>With Fake Store you can</p>
            </div>
            <div>
                <p className='text-7xl text-white font-bold'>Choose what's best for you wherever you are.</p>
            </div>
            <div>
                <p className='text-white text-base'>Got no time to go outside and shop for you next look? Our website provides you with a variety of clothes from various brands and makes. It's like walking into a real store.</p>
            </div>
            <div className='flex items-center gap-4'>
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
  )
}

export default PageHero
