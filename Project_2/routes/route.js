const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/", ctl.login);            
route.post("/login", ctl.loginData);  

route.get("/seoDash", ctl.seoDash);


route.get("/seoDash", ctl.firstPage);


route.get("/addAdmin", ctl.addAdmin);
route.post("/addAdmin", ctl.addAdminData);


route.get("/viewAdmin", ctl.viewAdmin);


route.get("/deleteAdmin", ctl.deleteAdmin);


route.get("/editAdminData/:id", ctl.editAdminData);
route.post("/editAdminData/:id", ctl.updateAdminData);





module.exports = route;