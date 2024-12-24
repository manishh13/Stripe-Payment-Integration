import "../pages/ProductDeatil.css"
import { useState,useEffect } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addToCard } from '../cardSlice';
      // let api = "https://fakestoreapi.com/products";

const ProductDeatil = () => {
    // const { proid } = useParams();
    const[mydata,setMydata]=useState([]);
    const dispatch = useDispatch();

    const loadData=()=>{
      let api = "https://api.escuelajs.co/api/v1/products";

    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log("products",res.data);
    });
    }
  useEffect(()=>{
    loadData()
  },[])


    const addcardData=(id,image, name, price, )=>{
      console.log("add to cart",id, name, price, image)
      dispatch(addToCard({id:id, name:name,   price:price, image:image, qnty:1}))
     }
  return (
    <>
     
            <div style={{ height:"auto",width:"100%",margin:'5px', padding:"2px",display:'flex',justifyContent:'space-around',alignItems:'flex-start' ,flexWrap:"wrap"}}> 
            {
        mydata.map((key,i)=>{
          return(        
               <div id={key.id} style={{border:'1px solid green',width:'300px',height:'300px', display:'flex',flexDirection:"column",justifyContent:'space-evenly',alignItems:'center',paddingTop:"5px",paddingBottom:"5px", marginTop:"5px",marginBottom:"5px" }}>
            <div  style={{height:"150px",width:'180px'}}>
              <img src={key.category.image} width="150px" height="100px" />
            </div>
            <div style={{width:"180px"}} >
              <h6>{key.title}</h6> 
             
              <p style={{fontWeight:"800"}}> {String.fromCharCode(0x20B9)}{key.price} </p>
              
              
  
            </div>
            <div style={{width:"180px"}}>
            <Button id={key.id} style={{padding:'2px 5px',borderRadius:'5px',backgroundColor:'green',color:'white'}} 
               onClick={()=>{addcardData(key.id, key.category.image, key.title, key.price)}}
              >Add to Cart
              </Button>
              </div>
            
          </div>

)
})
}
</div>
        
      
    
    </>
  )
}

export default ProductDeatil;