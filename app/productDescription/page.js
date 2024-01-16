'use client'
import React from 'react'
import { RecoilRoot } from 'recoil'
import ProductDescriptionPage from '../components/ProductDescriptionPage'

const page = () => {
  return (
    <RecoilRoot>
        <ProductDescriptionPage />
    </RecoilRoot>
  )
}

export default page
