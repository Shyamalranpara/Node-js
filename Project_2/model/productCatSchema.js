const mongoose = require("mongoose")

const schema = mongoose.Schema({
    ProductName:{
        type:String,
        requierd:true,
    },
    productPrice:{
        type:String,
        requierd:true,
    },
     image: {
    type: String,
    required: true,
    },
    subCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategorie",
        requierd:true,
    },
})

const ProductCatSchema = mongoose.model("ProductCategorie",schema)

module.exports = ProductCatSchema;