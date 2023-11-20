const express = require('express')
const router = express.Router()
const {addProduct,productList,userList} = require('../controllers/adminController')

//Add Product
router.post('/addProduct',addProduct)

//PRODUCT LIST
router.get('/productList',productList)

//USER LIST
router.get('/userList',userList)

module.exports = router;