import React from 'react'

import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    <>
      <div className='group/item relative'>
                <Link to={'/products'} >Products</Link>
                <div className='group/edit invisible group-hover/item:visible transition-all delay-75 absolute -bottom-2 w-full h-1 bg-fuchsia-900'></div>
            </div>
            <div className='group/item relative'>
                <Link to={'/contacts'} >About FS</Link>
                <div className='group/edit invisible group-hover/item:visible transition-all delay-75 absolute -bottom-2 w-full h-1 bg-fuchsia-900'></div>
            </div>
            <div className='group/item relative'>
                <Link to={'inbox'} >Messages</Link>
                <div className='group/edit invisible group-hover/item:visible transition-all delay-75 absolute -bottom-2 w-full h-1 bg-fuchsia-900'></div>
        </div>
    </>
  )
}

export default NavItems
