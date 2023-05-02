import React from 'react'

import { useState, useEffect } from "react";

import { RxMagnifyingGlass } from 'react-icons/rx'
import SearchResults from './SearchResults'

const SearchBar = () => {

const [productsData, setProductsData] = useState([]);
const [filteredData, setFilteredData] = useState();
const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      setProductsData(data)
    })
    .catch((err) => console.log(err))
  }, []);

function handleChange (e) {
    e.preventDefault();
    const searchWord = e.target.value;
    const newFilter = productsData.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);

    searchWord ? setShowSearchResults(true) : setShowSearchResults(false);
}

  return (
    <div className='relative'>
    <form action="" className='flex items-center relative'>
        <input onChange={handleChange} type="text" placeholder='Search for products or brands' className='min-w-full px-4 py-2 border-2 border-fuchsia-900 rounded-full absolute right-0' />
        <button className='bg-fuchsia-900 hover:bg-fuchsia-800 rounded-full p-1 absolute right-2'>
                <RxMagnifyingGlass className='text-2xl text-white' />
        </button>
    </form>

    {showSearchResults && (
        <div className='absolute top-6 h-60 overflow-auto scrollbar-hide'>
            <SearchResults filteredData={filteredData} />
        </div>
    )}

    </div>
  )
}

export default SearchBar
