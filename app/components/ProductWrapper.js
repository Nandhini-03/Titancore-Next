'use client'
import React from 'react'
import Products from './Products'
import { RecoilRoot } from 'recoil'

const ProductWrapper = () => {
  return (
    <RecoilRoot>
      <Products />
      </RecoilRoot>
  )
}

export default ProductWrapper
