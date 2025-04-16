const express = require("express")
const port = 1003;
const app = express();
const path = require("path")
const db = require("./config/db")


app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server is started on: ${port}`)
})