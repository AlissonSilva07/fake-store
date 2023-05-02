import React from 'react'

const SideFilters = ( { productsData, uniqueCategories, handleClick } ) => {

  return (
    <aside className='container fixed top-20 left-20 flex flex-col items-start w-60 p-4 bg-white shadow-xl rounded-2xl border'>
        <div>
            <div className='mb-4'>
                <p className='font-bold'>Filter by category: </p>
            </div>
            <div>
                {uniqueCategories.length > 0 && uniqueCategories.map(cat => {
                  return (
                  <div key={cat.id}>
                    <button onClick={handleClick}>
                      <p className='hover:text-fuchsia-900 hover:font-bold'>{cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}</p>
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
