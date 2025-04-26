const mongoose  = require("mongoose")

const addminSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
const Addmin = mongoose.model("Addmin",addminSchema)
module.exports = Addmin