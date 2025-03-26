const express = require("express");
const port = 1020;

const app = express();

let students=[{
    id:1 , name:"shyamal" , subject:"node" , city:"rajkot"
}]
app.set("view engine","ejs")
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.render("index",{students})
});

app.post("/addData",(req,res)=>{
    console.log(req.body)
    req.body.id = students.length+1;
    students.push(req.body)
    res.redirect("/")
})

app.get("/deleteData",)
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`your server is started on port: ${port}`)
})