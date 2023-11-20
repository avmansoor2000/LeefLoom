const {model,Schema} =require ('mongoose')

const userSchema = new Schema({
    name: {
        type: String
       
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
    
})
module.exports = {
    User: model("user", userSchema)
}