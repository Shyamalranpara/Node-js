const express = require("express")
const route = express.Router();

const multer = require("../middleweres/multer")
const ctl = require("../controllers/firstctl")

route.get("/", ctl.firstPage);


route.post("/addData",multer,ctl.addData)

route.get("/deleteData",ctl.deleteData)


route.get("/editData/:id", ctl.editData)

route.post("/updateData/:id",multer, ctl.updateData)

module.exports = route