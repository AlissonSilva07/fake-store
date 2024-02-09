import React, { useEffect, useState } from 'react'

const SideFilters = ( { handleClick } ) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <aside className='container fixed top-20 left-20 flex flex-col items-start w-60 p-4 bg-white shadow-xl rounded-2xl border'>
        <div>
            <div className='mb-4'>
                <p className='font-bold'>Filter by category: </p>
            </div>
            <div>
                {categories.length > 0 && categories.map(cat => {
                  return (
                  <div>
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
