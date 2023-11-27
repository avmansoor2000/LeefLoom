const express = require('express')
const router = express.Router()
const { userLogin, userRegister, productList , productView, getCart ,addToCart , postOrder, getCheckout} = require('../controllers/userController');
const auth = require('../middleware/auth')

// POST HOME PAGE
router.post('/userLogin',userLogin)

// POST SIGNUP PAGE
router.post('/userRegister',userRegister)

// LOGOUT
// router.post('/logout',auth,logout)

// GET SHOP PAGE
router.get('/product-list',productList)

// GET PRODUCT VIEW
router.get('/product-view/:productId',productView)

//  GET USER'S CART 
router.get('/cart',getCart)

//  POST ADD ITEM TO CART
router.post('/addToCart',addToCart);

//  GET CHECKOUT
router.get('/checkout',getCheckout)

// POST ORDER
router.post('/placed_Order',postOrder)



module.exports = router;