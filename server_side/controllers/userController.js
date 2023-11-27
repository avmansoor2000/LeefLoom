const { User } =  require('../models/userSchema')
const {Product} = require('../models/productSchema')
const {Cart} = require('../models/cartSchema')
const {Order} = require('../models/orderSchema')
// const {auth,revokedTokens} = require('../middleware/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
require('dotenv').config();


//    Login

const userLogin = async (req, res) => {
    const { email, password } = req.body;
   
    try{
        
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }
    
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
        return res.status(401).json({ error: "Invalid Email or Password" });
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
       return res.status(401).json({error: "Invalid Email or Password"})
    }
 

    // Create a JWT token with user information
    const  key = process.env.jWT_KEY
    const token = jwt.sign({ user_id: user._id, email: email }, key, { expiresIn: '1h' });
    console.log(token);
   

    // Respond with the JWT token
    return res.status(200).json({ message: "Login successful", token });

}catch(error){
    res.status(500).json({ error: "Error while registering user" });
}
}


//          Post Register

const userRegister = async(req,res)=>{
    const {name,email,password} = req.body

    try{
     //   const { name, email, password } = req.body; 
     const user = await User.findOne({ email })
     if(user){
        return res.status(409).json({ success: false, message: 'User already registered.' });
      }
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Fill all the fields.' });
      }else{
        const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User ({
        name,
        email,
        password : hashedPassword
    })
    await newUser.save()
    console.log("success");

    // Create a JWT token with user information
    const  key = process.env.jWT_KEY
    const token = jwt.sign({ user_id: newUser._id, email: email }, key, { expiresIn: '1h' });
    console.log(token);

    return res.status(200).json({success: true, message: 'success',token})
}
}catch (error){
    console.error("Error while registering user:", error);
    res.status(500).json({ error: "Error while registering user" });

}
}


// Logout

// const logout = (req, res) => {
//     try {
//         // Clear the token from the client side (example using cookies)
//         res.clearCookie('token');

//         // Add the token to the revoked tokens set
//         revokedTokens.add(req.header('Authorization'));

//         res.json({ message: 'Logout successful' });
//         console.log("logout");
//     } catch (error) {
//         console.error('Error during logout', error);
//         // Handle errors if needed
//         res.status(500).json({ error: "Internal server error" });
//     }
// };


//         Product List

const productList = async(req,res)=>{
    try{
    const product = await Product.find({ deleted: false });
    res.json(product);
}catch(error){
    console.error('Error fetching product list:', error);
    res.status(500).json({error: "Error fetching product list" })
}
}


//    PRODUCT VIEW

const productView = async(req,res)=>{
    const productId =await req.query.productId;
    // const productID = await req.body.productID

    try{
        const product = await Product.findOne({_id : productId})

        if(!product){
            return res.status(404).json("product not found")
        }
        // console.log(product.name);
        res.json(product)
    }catch(error){
        console.error('Error fetching product:', error);
        return res.status(500).json("Internal Server Error")
    }
}


// Cart

const getCart = async (req,res) => {
    try{
        const userId = "6553ee850dc5a135761c7042";
        const cart = await Cart.findOne({user : userId})
        console.log(cart);

        res.json(cart)
        res.status(200)
    }catch(error){
        res.status(500).json("internal Server Error")
    }
    
}


// POST PRODUCT TO CART

const addToCart = async(req,res) =>{
    try {
        // const userId = req.user._id;
        const { productId, quantity,userId,price } = req.body;
        // const userId = "6553ef50262e4da04c38d3ef";
        // const userId = "6553ee850dc5a135761c7042";
        // const productId = "654ab7a8289b15711c4bb5da ";
        // const quantity = 1;
        // const price = 100;
    
        // Find the user's cart or create a new cart if it doesn't exist
        let cart = await Cart.findOne({user : userId})

        if(!cart){
            cart = new Cart({
                user: userId,
                cartItems: [],
            });
        }

        // Check if the product is already in the cart
        const existingProduct = await cart.cartItems.find(item => item.productId.toString() === productId)
    
        if(existingProduct){
            existingProduct.quantity += quantity;
            
        }else{
            // If the product is not in the cart, add it 
            cart.cartItems.push({
                productId: new mongoose.Types.ObjectId(productId),
                quantity,
                price
            })
            
        }
        console.log(existingProduct+"ddddddddddddd");
        // console.log(existingProduct.price);
        
        await cart.save()
        
    
        res.status(200).json({ success: true, message: "Product added to cart successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
};


// CHECKOUT

const getCheckout = (req,res) =>{
    const cartDetails = Cart.find({user : "6544d81657c7cdc843c2eb74"})
    console.log(cartDetails);
    res.status(200).json("Success")
}


//  PLACED ORDER

const postOrder = async(req,res) =>{
    try{
       const {userId,productId,paymentMethod,quantity} = req.body

    let order = await Order.findOne({user : userId })?. exec() ?? null ;

    if(!order){
        const order = new Order ({
            user : userId,
            orders:[]
        });

        await order.save()

    }

     order.orders.push({
        productId,
        paymentMethod,
        quantity
    })
    await order.save()
    
    res.status(200).json("Successs")
}catch(error){
    res.status(500).json("error")
}
}



module.exports.userLogin = userLogin;
module.exports.userRegister = userRegister;
// module.exports.logout = logout;
module.exports.productList = productList;
module.exports.productView = productView;
module.exports.getCart = getCart;
module.exports.addToCart = addToCart;
module.exports.postOrder = postOrder;
module.exports.getCheckout = getCheckout;
