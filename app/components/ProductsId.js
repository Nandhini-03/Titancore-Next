// import React from 'react'
'use client'
import { useEffect, useState } from 'react';
import ProductAPI from '../../API/Products'
// import ProductCards from "./ProductCards"
import { RecoilRoot, useRecoilState } from 'recoil';
import {DynamicProducts} from '../../recoil/Products'
import dynamic from 'next/dynamic';
const ProductCards = dynamic(() => import('./ProductCards'), { ssr: false });


const ProductsId = () => {
const [dynamicData,setDynamicData] = useRecoilState(DynamicProducts)
// const [dynamicData,setDynamicData]=useState([])
    useEffect(() =>
    {
      const fetchData=async() =>
      {
        try
        {
          const response=await ProductAPI.getTrendProducts()
          setDynamicData(response.data)
          console.log(response)
        }
        catch(error)
        {
          console.log(error)
        }
      }
      fetchData()
    },[])
    console.log("DynamicData",dynamicData)

  return (
    <div>
      <h2>Based on Recent Trend</h2>
      <ProductCards Data={dynamicData}/>
    </div>
  )
}

export default ProductsId
