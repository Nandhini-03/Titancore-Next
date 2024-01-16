// import React from 'react'
'use client'
import { useRecoilState } from "recoil"
import {DynamicProducts} from '../../recoil/Products'
import productAPI from '../../API/Products' 
import {SearchValues} from '../../recoil/Products'
import { useEffect } from "react"
import { useDebounce } from "usehooks-ts"

const Header = () => {

  const [dynamicData,setDynamicData] = useRecoilState(DynamicProducts)
  const [searchValue,setSearchValue] = useRecoilState(SearchValues)
  const debouncedValue = useDebounce(searchValue, 500)

  const handleSearchValue=(e) =>
  {
    setSearchValue(e.target.value)
    console.log("search",searchValue)
  }

  useEffect(() =>
  {
    const fetchData =async() =>
    {
      try{
        const response=await productAPI.getSearchProducts(debouncedValue)
        console.log("search",response.data)
        setDynamicData(response.data)
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData()
  },[debouncedValue])

    return (
        <div style={{ position: "absolute", backgroundColor: "rgba(56, 69, 90, 0.5)", width: "100%" }}>
            <div style={{ margin: "0 50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex" }}>Spotify</div>
                <div style={{ backgroundColor: "white", borderRadius: "10px", height: "25px", width: "50%", display: "flex", alignItems: "center" }}>
                    <input
                        placeholder="Search"
                        style={{ border: "none", borderRadius: "10px", marginLeft: "10px", width: "100%", marginRight: "10px" }}
                        value={searchValue}
                        onChange={(e) => handleSearchValue(e)}
                    />
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "15px" }}>Premium</p>
                    <p style={{ marginRight: "15px" }}>Support</p>
                    <p style={{ marginRight: "15px" }}>Download</p>
                    <div style={{ height: "18px", border: "1px solid black", marginTop: "13px" }}></div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header
  