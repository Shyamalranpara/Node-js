const express = require("express");
const port = 1004;
const app = express();
const path = require("path");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/",express.static(path.join(__dirname,"public"))) 
app.use(cookieParser())

app.use(
    session({
        name:"local",
        secret:"rnw",
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 100 * 100 * 60 },
    })
)

app.use(passport.initialize())
app.use(passport.session())


app.use("/",require("./routes/route"))
// app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen((port),err=>{
    err ? console.log(err) : console.log(`server is started on port: ${port}`)
})