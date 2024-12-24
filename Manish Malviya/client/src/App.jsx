import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDeatil";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./components/ThankYou";
import Failed from "../src/components/Failed";

// import Header from './components/Header'

const App = () => {
  return (
    <>
    
      
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="carddata" element={<CardData />} />
            <Route path="products" element={<ProductDetail/>}/>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="thankyou" element={<ThankYou/>}/>
            <Route path="failed" element={<Failed/>}/>
          </Route>
          
      
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
