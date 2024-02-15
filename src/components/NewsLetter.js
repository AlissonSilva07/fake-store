import logoMail from '../imgs/mail.png'

const NewsLetter = () => {
    return(
        <div className='flex flex-col items-center w-full p-8 gap-4 mx-20 bg-fuchsia-100'>
            <div>
                <img src={logoMail} alt="newsletter" className='w-20' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-black text-xl font-bold'>Subscribe on our newsletter</p>
                <p className='text-center'>Get updates and price alerts directly in your inbox.</p>
            </div>
            <div>
                <div action="" className='flex items-center justify-center relative'>
                    <input type="text" className='w-80 px-4 py-2 border-2 border-fuchsia-900 rounded-full' />
                    <button className='bg-fuchsia-900 hover:bg-fuchsia-800 rounded-full px-2 py-1 absolute right-2'>
                        <p className='text-white font-bold text-sm'>Subscribe</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter