const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

const firstSchema = mongoose.model("BookStoreCRUD", schema);
module.exports = firstSchema;
