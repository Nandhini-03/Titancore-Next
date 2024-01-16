'use client'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Header from './Header'

const HeaderWrapper = () => {
  return (
    <RecoilRoot>
        <Header />
    </RecoilRoot>
  )
}
  
export default HeaderWrapper
