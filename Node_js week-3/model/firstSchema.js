// structure or blueprint of documents within a MongoDB collection. It defines the shape of the data

// In Mongoose, a Schema is an object that defines the structure of documents within a collection in MongoDB. Each schema can define fields, data types, default values, validators, and other behaviors for how the data should be handled.

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const firstSchema = mongoose.model("secondCRUD",schema);
module.exports = firstSchema;
