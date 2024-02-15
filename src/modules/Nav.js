import React, { useState } from 'react'

import logoImg from '../imgs/logo.png'

import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { MdMenu } from "react-icons/md";

import { Link } from 'react-router-dom'

import SearchBar from '../components/small components/SearchBar'
import NavItems from '../components/small components/NavItems'
import { SideMenuMobile } from '../components/small components/nav/SideMenuMobile';

const Nav = () => {

    const [openSideMenu, setOpenSideMenu] = useState(false);

    const toggleSideMenu = () => {
        setOpenSideMenu(!openSideMenu)
    }

  return (
    <nav className='fixed top-0 right-0 left-0 h-20 px-8 flex items-center justify-between bg-white shadow-xl z-50'>

        {/* Menu - Mobile */}
        <button onClick={toggleSideMenu}>
            {!openSideMenu ? <MdMenu className='text-2xl text-fuchsia-900' /> : <AiOutlineClose className='text-2xl text-fuchsia-900' />}
        </button>

        {/* Sidebar Menu - Mobile */}
        {openSideMenu && <SideMenuMobile toggle={toggleSideMenu} />}

        {/* Company Logo - All */}
        <Link to='/' className='w-auto flex items-center gap-2'>
            <img src={logoImg} alt="company logo" className='h-8' />
            <p className='text-2xl font-bold'><span className='text-fuchsia-900'>f</span>ake</p>
        </Link>

        {/* Cart - Mobile */}
        <AiOutlineShoppingCart className='text-2xl text-fuchsia-900' />

        {/* Searchbar - Desktop */}
        <div className='hidden md:flex-1'>
            <SearchBar />
        </div>

        {/* Items - Desktop */}
        <div className='w-auto text-fuchsia-900 font-bold hidden md:flex gap-10'>
            <NavItems />
        </div>

        {/* Items Split - Desktop */}
        <div className='hidden md:flex w-[2px] h-[40px] bg-fuchsia-900'></div>

        {/* Buttons - Desktop */}
        <div className='w-auto hidden md:flex items-center gap-10'>
            <button className='flex flex-col items-center gap-1'>
                <AiOutlineHeart className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Fav</p>
            </button>
            <button className='flex flex-col items-center gap-1'>
                <AiOutlineShoppingCart className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Cart</p>
            </button>
            <button className='flex flex-col items-center gap-1'>
                <AiOutlineUser className='text-2xl text-gray-400' />
                <p className='text-xs text-gray-400 font-bold'>Profile</p>
            </button>
        </div>

    </nav>
  )
}

export default Nav
