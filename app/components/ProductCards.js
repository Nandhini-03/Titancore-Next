import { DescriptionDatas } from '@/recoil/Products';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Link from 'next/link'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const ProductCards = ({Data}) => {
    console.log("Data",Data)
    const [descriptionValues,setDescriptionValues] = useRecoilState(DescriptionDatas)
    // const nav = useRouter();
    // const handleClick = (id,name,Description,image) => {
    //     console.log("values",id,name,Description,image)
    //     nav('/projectDetails', { state: { productId: id, productName:name,productDescription: Description ? Description:" ",productImg:image } })
    // }
    console.log("descriptionValues",descriptionValues)
    const handleClick=(item) =>
    {
        console.log("item",item)
        setDescriptionValues([item.id,item.productName,item.productImgPath,item.productDescription])
        console.log("drss",descriptionValues)
    }

    useEffect(() => {
        console.log("Updated descriptionValues:", descriptionValues);
      }, [descriptionValues]);

    return (
        <div style={{ margin: "10px 0", display: "flex", flexWrap: "wrap" }}>

            {
                Data &&
                Data.map(item => (
                    <Card key={item.id} sx={{ maxWidth: 215, marginRight: "15px", maxHeight: "330px", marginBottom: "10px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                        <CardMedia
                            sx={{ maxHeight: 230, height: "100%", width: "100%", objectFit: "cover", minWidth:215}}
                            component="img"
                            image={item.productImgPath}
                            title={item.productName}
                        />
                        <CardContent style={{ padding: "10px" }}>
                            <h3 style={{ margin: "5px" }}>{item.productName}</h3>
                        </CardContent>
                        <CardActions>
                            <Link 
                                href={{
                                    pathname:`/productDescription`,
                                    // query:{
                                    //     // id:item.id,
                                    //     name:item.productName,
                                    //     description:item.productDescription,
                                    //     image:item.productImgPath
                                    // },
                                }}
                                as={`/productDescription`}
                                onClick={() => handleClick(item)}
                                style={{textDecoration:"none",fontSize:"14px"}}
                                >MORE DETAILS</Link>
                            {/* <Button size="small" onClick={() => handleClick(item.id,item.productName,item.productDescription,item.productImgPath)}>More Details</Button> */}
                        </CardActions>
                    </Card>
                )
                )
            }
        </div>
    )
}

    export default ProductCards