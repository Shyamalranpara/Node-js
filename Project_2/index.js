const express = require("express");
const port = 1004;
const app = express();
const path = require("path");
const db = require("./config/db");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/",express.static(path.join(__dirname,"public"))) 
app.use(cookieParser())

app.use("/",require("./routes/route"))
// app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen((port),err=>{
    err ? console.log(err) : console.log(`server is started on port: ${port}`)
})