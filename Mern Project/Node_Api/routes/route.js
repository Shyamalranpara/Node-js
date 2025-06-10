const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

// route.get("/addGetData", ctl.addGetData); 

// route.post("/addData", ctl.addData);

// route.delete("/addDeleteData/:id", ctl.addDeleteData);

route.post("/register",ctl.register)

module.exports = route;
