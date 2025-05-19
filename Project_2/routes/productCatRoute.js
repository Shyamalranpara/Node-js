const express = require("express")
const route = express.Router();
const ctl = require("../controllers/productCatCtl")
const passport = require("../middleware/localSt")
const multer = require("../middleware/multer");

route.get("/addProductCat",passport.checkAuth,ctl.addProductCat);
route.post("/addProductCat",passport.checkAuth,multer,ctl.addProductCategory);
route.get("/viewProductCat",passport.checkAuth,ctl.viewProductCat);

module.exports = route;