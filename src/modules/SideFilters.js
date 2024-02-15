import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext';

const SideFilters = ( { handleClick, categories } ) => {

  return (
    <aside className='container fixed top-20 left-20 flex flex-col items-start w-fit mt-4 pl-4 pr-16 py-4 bg-white shadow-xl rounded-2xl border z-40'>
        <div>
            <div className='mb-4'>
                <p className='font-bold'>Filter by category: </p>
            </div>
            <div>
                {categories && categories.map(cat => {
                  return (
                  <div key={cat.index}>
                    <button onClick={handleClick}>
                      <p className='hover:text-fuchsia-900 hover:font-bold'>{cat}</p>
                    </button>
                  </div>
                  )
                })}
            </div>
        </div>
        <div>
        </div>
        <div></div>
        <div></div>
    </aside>
  )
}

export default SideFilters
