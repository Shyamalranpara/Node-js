const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const passport = require("../middleware/localSt");

route.get("/", ctl.login);

route.post("/login",passport.authenticate("localSt",{failureRedirect:"/"}),
ctl.loginData
),
route.get("/logout",ctl.logout);

route.get("/profile",passport.checkAuth,ctl.profile)

route.get("/changePassword",passport.checkAuth,ctl.changePassword)

route.post("/changePass",passport.checkAuth,ctl.changePass)

route.get("/lostPass",ctl.lostPassword) 
route.post("/lostPass",ctl.lostPass)

route.get("/forgetPass",ctl.forgetPassword) 
route.post("/forgetPass",ctl.forgetPass)

route.get("/seoDash", passport.checkAuth, ctl.seoDash);

route.get("/seoDash",passport.checkAuth, ctl.firstPage);


route.get("/addAdmin",passport.checkAuth, ctl.addAdmin);
route.post("/addAdmin",passport.checkAuth, ctl.addAdminData);


route.get("/viewAdmin",passport.checkAuth, ctl.viewAdmin);


route.get("/deleteAdmin",passport.checkAuth, ctl.deleteAdmin);


route.get("/editAdminData/:id",passport.checkAuth, ctl.editAdminData);
route.post("/editAdminData/:id",passport.checkAuth, ctl.updateAdminData);


module.exports = route;