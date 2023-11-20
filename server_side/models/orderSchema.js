const {model,Schema} = require('mongoose')

const orederSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    orders: [
        {
            productId: {type: Schema.Types.ObjectId, ref : "order"},
            paymentMethod: {type: String}
        }
    ]
})

module.exports={
    Order : model("order",orederSchema)
}