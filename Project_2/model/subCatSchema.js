const mongoose = require("mongoose")

const schema = mongoose.Schema({
    SubcatName:{
        type: String,
        required: true,
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
        required: true,
    },
}) 

const SubcatSchema = mongoose.model("SubCategorie",schema)

module.exports = SubcatSchema;