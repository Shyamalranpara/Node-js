const express = require("express")
const port = 1010;

const app = express();

app.set("view engine","ejs")
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.render("index")
});

app.post("/addData",(req,res)=>{
    console.log(req.body);
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started ${port}`)
})