import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter} from  'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full h-60 bg-fuchsia-900 flex flex-col gap-4 items-center justify-center text-white'>
        <div className='flex items-center gap-4'>
            <FaFacebook className='text-3xl' />
            <FaInstagram className='text-3xl' />
            <FaTwitter className='text-3xl' />
        </div>
        <div className='flex gap-2 font-bold'>
            <a href="#">Info</a>
            <p>&#183;</p>
            <a href="#">Support</a>
            <p>&#183;</p>
            <a href="#">Development</a>
        </div>
        <div className='flex gap-2 font-bold text-sm'>
            <a href="#" className='hover:underline hover:decoration-solid'>Terms of Use</a>
            <p>&#183;</p>
            <a href="#" className='hover:underline hover:decoration-solid'>Privacy Policy</a>
        </div>
        <div>
            <p className='text-zinc-300 text-sm'>&#169; 2023 Alisson Rego</p>
        </div>
    </footer>
  )
}

export default Footer
