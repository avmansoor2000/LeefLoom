const {model,Schema} = require('mongoose')

const productSchema = new Schema({


    name : {
        type : String
    },
    auther : {
        type : String
    },
    price : {
        type : Number
    },
    category : {
        type : String
    },
    deleted: {
        type: Boolean,
        default: false,
    },


})

module.exports={
    Product: model("product",productSchema)
}