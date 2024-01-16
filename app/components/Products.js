// import React from 'react'
'use client'
import { useEffect, useState } from 'react';
import ProductAPI from '../../API/Products'
import ProductCards from './ProductCards';
import { RecoilRoot, useRecoilState } from 'recoil';
import { ProductsState } from '@/recoil/Products';

const Products = () => {
  const [staticData,setStaticDatas] = useRecoilState(ProductsState)
  // const [staticData,setStaticDatas] = useState([])

  useEffect(() =>
  {
    const fetchData=async() =>
    {
      try
      {
        const response=await ProductAPI.getStaticProducts()
        setStaticDatas(response.data)
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData()
  },[])
  console.log("StaticDataNext",staticData)


  return (
    <div>
      <h2>Products</h2>
      <ProductCards Data={staticData}/>
    </div>
  )
}

export default Products
