const {model,Schema} = require('mongoose')

const cartSchema = new Schema ({

    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    cartItems: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "product" },
            quantity: { type: Number, default: 1 },
            price: { type: Number },
        },
    ],

    
})

module.exports={
    Cart : model("cart",cartSchema)
}