import React from 'react'

import logoImg from '../imgs/logo.png'

import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'

import { Link } from 'react-router-dom'

import SearchBar from '../components/small components/SearchBar'
import NavItems from '../components/small components/NavItems'

const Nav = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 h-20 px-20 flex items-center gap-10 bg-white z-50'>
        <div>
            <Link to='/' className='w-auto flex items-center gap-4'>
                <img src={logoImg} alt="company logo" className='h-10' />
                <p className='text-2xl font-bold'><span className='text-fuchsia-900'>f</span>ake</p>
            </Link>
        </div>
        <div className='flex-1'>
            <SearchBar />
        </div>
        <div className='w-auto text-fuchsia-900 font-bold flex gap-10'>
            <NavItems />
        </div>
        <div className='w-[2px] h-[40px] bg-fuchsia-900'></div>
        <div className='w-auto flex items-center gap-10'>
            <a href="#" className='flex flex-col items-center gap-1'>
                <AiOutlineHeart className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Fav</p>
            </a>
            <a href="#" className='flex flex-col items-center gap-1'>
                <AiOutlineShoppingCart className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Cart</p>
            </a>
            <a href="#" className='flex flex-col items-center gap-1'>
                <AiOutlineUser className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Profile</p>
            </a>
        </div>
    </nav>
  )
}

export default Nav
