// import React from 'react'
'use client'
import { useRecoilState, useRecoilValue } from "recoil"
import { DescriptionDatas } from "@/recoil/Products"
import { DynamicProducts } from "@/recoil/Products"
import { useEffect } from "react"

const ProductsDescription = () => {
    const [descriptionValues] = useRecoilValue(DescriptionDatas)
    const [dynamicData,setDynamicData] = useRecoilState(DynamicProducts)
    // const [descriptionValues,setDescriptionValues] = useRecoilState(DescriptionDatas)
    console.log("dyna",dynamicData)
    console.log("sri",descriptionValues)
    // const router=useRouter()
    // console.log(router)
    // const {name,description,image}=router.query

    

    // console.log("query",router.query)


    useEffect(() =>
    {
        console.log("mounted",descriptionValues)
    },[descriptionValues])
  return (
    <div>
        Hii
        {/* <div style={{width:"70%",margin:"auto",backgroundColor:"antiquewhite",minHeight:"90vh"}}>
            <div style={{margin:"0 30px",display:"flex"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}>
                    <div style={{maxWidth:"400px",maxHeight:"500px",overflow:"hidden",marginRight:"30px",borderRadius:"10px"}}>
                        <img style={{width:"100%",objectFit:"cover",height:"100%"}} src={image}/>
                    </div>
                </div>
                <div style={{margin:"30px"}}>
                    <div>
                        <h2>Product Name</h2>
                        <p>{name}</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            
        </div> */}
        {/* {location.state.productId}
        {location.state.ProductsDescription} */}
    </div>
  )
}

export default ProductsDescription
