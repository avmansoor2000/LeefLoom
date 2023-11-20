const {Product} = require('../models/productSchema')
const {User} = require('../models/userSchema')
// const cloudinary = require("cloudinary")
const {cloudinary} = require('../config/cloudinary')
// const cloudinary = require("cloudinary")


//           ADD PRODUCT

const addProduct = async(req,res) => {
    // BookName, Price, category, quentity, img
    try{
    // const {name,price,auther,category} = req.body
    const samplePath = "D:\\Images\\The Alchemist.jpg"
    const name = "The Alchemist";
    const price = 800;
    const auther = "Paulo Coulo"
    const category = "Novel"

    if(!name || !price || !auther || !category){
        return res.status(400).json({error: "fill all fields"})
    }
    console.log("hlooo1");
    
    // Upload the image to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(samplePath)
      console.log(cloudinaryResult,"hlooo2");
      
    

    const newProduct = new Product({
        name,
        price,
        auther,
        category,
        imageUrl: cloudinaryResult.secure_url

    })
    await newProduct.save()
    console.log('success');
    
    return res.status(200).json({success: true, message:'success'})
}catch(error){
    console.error("Error adding product:", error);
    res.status(500).json({error: "Error adding product", details: error.message})
}
    
}

// PRODUCT LIST
const productList = async(req,res)=>{
    // console.log("productList");
    const products = await Product.find({ deleted: false });
    // console.log(products[0].name);
    res.json(products);
}

// USER LIST
const userList = async(req,res)=>{
    try{  
    const users = await User.find()

    if(!users){
        res.status(200).json("no users")
    }else{
    res.status(200).json(users)
}

}catch(error){
    res.status(500).json("Internal server error")
}

}

module.exports.addProduct = addProduct;
module.exports.productList = productList;
module.exports.userList = userList;