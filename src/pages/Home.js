import React from 'react'

import PageHero from '../components/PageHero'
import Categories from '../modules/Categories'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>

      
        <PageHero />

        
        <Categories />
        

       
        {/* <Testimonials /> */}
       

        <NewsLetter />

    </div>
  )
}

export default Home
