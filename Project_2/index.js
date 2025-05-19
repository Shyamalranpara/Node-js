const express = require("express");
const port = 1004;
const app = express();
const path = require("path");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const connectFlash = require("connect-flash");
const flash = require("./middleware/flash");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", express.static(path.join(__dirname, "public")));
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

app.use(connectFlash())
app.use(flash.setflash)

app.use("/",require("./routes/route"))
app.use("/category",require("./routes/categoryRoute"))
app.use("/subCategory",require("./routes/subCategoryRoute"))
app.use("/productCategory",require("./routes/productCatRoute"))

app.listen((port),err=>{
    err ? console.log(err) : console.log(`server is started on port: ${port}`)
})