import React from 'react'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';

import { MdOutlineVerified } from 'react-icons/md'
import { TfiWorld } from 'react-icons/tfi'

import GoBackButton from '../components/small components/GoBackButton';
import InStock from '../components/small components/InStock';
import CustomButtonInverted from '../components/small components/CustomButtonInverted';
import CustomButton from '../components/small components/CustomButton';
import Loading from '../components/small components/Loading';

const SingleProductView = () => {

    const { pageId } = useParams();

    const [productsData, setProductsData] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pageId}`, {
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
  }, [pageId]);

  return (
    <div className='my-20 mx-20 flex flex-col gap-4 relative'>

    {productsData !== 0 &&
        <div className='absolute bottom-4 right-6'>
            <span className='text-fuchsia-900 font-bold'>Product ID: #{productsData.id}</span>
        </div>}

      <div className='flex items-center justify-between'>
        <GoBackButton text='Back to Products' />
        <p className='text-xl font-bold'>Product Details</p>
      </div>

      {!removeLoading && <Loading />}

      <div>
      {productsData !== 0 &&
        <div>
            <div className='h-auto flex gap-4 p-4 bg-white border shadow-xl rounded-xl overflow-hidden'>
                <div className='w-2/5 p-4 border flex flex-col items-center rounded-xl'>
                    <img src={productsData.image} alt="product" className='h-80 object-contain' />
                </div>
                <div className='w-3/5 flex flex-col gap-4 mx-4'>
                    <div>
                        <InStock />
                    </div>
                    <div>
                        <p className='text-gray-700 text-sm'>Category: {productsData.category}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>{productsData.title}</p>
                    </div>
                    <div>
                        <p>Rating: {productsData.rating?.rate}</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold'><span className='text-xl font-normal align-top'>$     </span>{productsData.price}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-fuchsia-900 font-bold'>Description:</p>
                        <p className='text-justify'>{productsData.description}</p>
                    </div>
                </div>
    
                <div className='w-1/5 h-fit p-4 border rounded-xl flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-10 h-10 bg-fuchsia-500 text-white rounded-lg flex items-center justify-center'>A</div>
                        <div className='flex flex-col text-sm'>
                            <p>Supplier</p>
                            <p>Alisson Rego</p>
                        </div>
                    </div>
                    <div className='w-full h-[0.1rem] bg-gray-300'></div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-1 items-center'>
                            <img src="https://flagsapi.com/BR/flat/24.png" alt="supplier flag" />
                            <p className='text-sm'>Teresina, Piauí</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <MdOutlineVerified className='w-6 text-base text-gray-400' />
                            <p className='text-sm'>Verified Seller</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <TfiWorld className='w-6 text-sm text-gray-400' />
                            <p className='text-sm'>Worldwide shipping</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <CustomButton text='Buy Now' />
                        <CustomButtonInverted text='Add to Cart' />
                    </div>
                </div>
    
            </div>
        </div>}
      </div>

      </div>    
  )
}

export default SingleProductView
