const mongoose = require("mongoose")

const schema = mongoose.Schema({
    catName:{
        type:String,
        requierd:true
    },
    image:{
        type:String,
        requierd:true
    },
}) 

const catSchema = mongoose.model("Categorie",schema)

module.exports = catSchema;