'use client'
import React from 'react'
import { RecoilRoot } from 'recoil'
import ProductsId from './ProductsId'

const ProductsIdWrapper = () => {
  return (
    <RecoilRoot>
        <ProductsId />
    </RecoilRoot>
  )
}

export default ProductsIdWrapper
