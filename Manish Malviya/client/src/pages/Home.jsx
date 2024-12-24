
import "../pages/Home.css";



import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../cardSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    let api = "https://fakestoreapi.com/products";
    axios.get(api).then((res) => {
      setMydata(res.data);
     
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addcardData = (id, name, desc, pro, price, image) => {
    dispatch(
      addToCard({
        id: id,
        name: name,
        description: desc,
        product: pro,
        price: price,
        image: image,
        qnty: 1,
      })
    );
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: '18rem', marginTop:'20px' ,marginBottom:"20px"}}>
          <a href="#" onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
          <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
          </a>
      <Card.Body>
        <Card.Title>{key.title}</Card.Title>
        <Card.Text>
          {key.description}
          <br/>
          {/* {key.product} */}
          <br/>
         <span style={{color:'red', fontWeight:'bold'}}> Price :Rs {key.price}/- </span> 
        </Card.Text>
        <Button variant="primary"
         onClick={()=>{addcardData(key._id, key.name, key.description, key.product, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>

      </>
    );
  });

  return (
    <>
    
<div className="">


      {/* <div className="main-container">
        
      
        
        
        
        
        
     
      </div> */}
        
      

      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
        }}
      >
   Welcome To The E-Commerce
      </h3>

      
     <div
     id="cardData"
        
   >
     {ans}
   </div>
   

      <div className="Shopbnr">
        <h3
          style={{
            fontSize: "24px",
            color: "#FFFFFF",
            fontFamily: "Arial,sans-serif",
            fontWeight: "400",
          }}
        >
         
        </h3>
      
       
      </div>
      </div>
    </>
  );
};
export default Home;
