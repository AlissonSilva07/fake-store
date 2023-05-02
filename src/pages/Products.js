import React from 'react'

import { useState, useEffect } from 'react'

import ProductsView from '../modules/ProductsView'
import SideFilters from '../modules/SideFilters';
import Loading from '../components/small components/Loading';

const Products = () => {

  const [productsData, setProductsData] = useState([]);

  const [removeLoading, setRemoveLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');

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
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, []);

  const unique = productsData.filter(
    (obj, index) =>
      productsData.findIndex(
        (item) => item.category === obj.category && item.name === obj.name
      ) === index
  )

  function handleClick (e) {
    setFilterCategory(e.target.innetText)
  }


  return (
    <div>
      {!removeLoading && <Loading />}
      {productsData.length > 0 && (
        <div className='ml-80 mr-20 mt-20 relative'>
          <SideFilters handleClick={handleClick} uniqueCategories={unique} productsData={productsData}/>
          <ProductsView filterCategory={filterCategory} productsData={productsData} />
        </div>
      )}
    </div>
  )
}

export default Products
