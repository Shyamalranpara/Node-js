const express = require("express")
const port = 1010;

const app = express();

let students = [{
    id:1, name:"shyamal" , subject:"node" , city:"rajkot"
}];

app.set("view engine","ejs")
app.use(express.urlencoded())
/* Use the express.urlencoded() middleware to parse URL-encoded data */

app.get("/",(req,res)=>{
    console.log(students);
    
    res.render("index",{students})
});


app.post("/addData",(req,res)=>{
    console.log(req.body);
    req.body.id = students.length+1;
    // students.push(req.body);
    students=[...students,req.body] /* using spred oprator */
    res.redirect("/") /*server sends a redirect response, the browser will automatically make a new request to the URL provided by the redirect. */
})
/*  Access the parsed URL-encoded data from req.body */
 


app.get("/deleteData",(req,res)=>{
console.log(req.body) 
let data = students.filter((item)=>item.id != Number(req.query.id))
students=data;
res.redirect("/")
})

/* edit data */
app.get("/editData/:id",(req,res)=>{
let singleData = students.find((item)=>item.id == req.params.id);
res.render("edit",{singleData})
})

app.post("/updateData",(req,res)=>{
    students.forEach((item)=>{
        if(item.id == req.body.id){
            item.name = req.body.name
            item.subject = req.body.subject
            item.city = req.body.city
        }
        else{
            item
        }
    })
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started ${port}`)
}) 