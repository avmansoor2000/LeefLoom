const {model,Schema} = require('mongoose')

const orederSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    orders: [
        {
            productId: {type: Schema.Types.ObjectId, ref : "product"},
            paymentMethod: {type: String},
            quantity: {type: Number}
        }
    ]
})

module.exports={
    Order : model("order",orederSchema)
}