const UserModel= require("../models/userModel");


const customerSave=async(req, res)=>{
    const {name, address, city, pincode,products, price}=req.body;
    console.log(name, address, city, pincode, price,"lkjhgcxzxcgbhjjkhg lkgjfhgf")
    await UserModel.create({
        name:name,
        address:address, 
        city: city,
        pin:pincode,
        product:products,
        price:price
    })
  res.send(name, address, city, pincode, products, price);
  
}

module.exports={
    customerSave
}