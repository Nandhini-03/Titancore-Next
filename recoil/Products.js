'use client';

import {atom} from 'recoil'

export const ProductsState=atom(
    {
        key:"ProductsState",
        default:[]
    }
)

export const DynamicProducts=atom(
    {
        key:"DynamicProducts",
        default:[]
    }
)

export const DescriptionDatas=atom(
    {
        key:"DescriptionDatas",
        default:[]
    }
)

export const SearchValues=atom(
    {
        key:"SearchValues",
        default:""
    }
)