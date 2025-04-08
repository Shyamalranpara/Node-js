const express = require("express");
const port = 1213;
const path = require("path")
const app = express();
const db = require("./config/db");
const firstSchema = require("./model/firstSchema");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))

app.get("/", async (req, res) => {
    const books = await firstSchema.find({}); 
    res.render("index", { books }); 
});

app.post("/addData", async (req, res) => {
    await firstSchema.create(req.body);
    res.redirect("/");
});

app.get("/deleteData", async (req, res) => {
    await firstSchema.findByIdAndDelete(req.query.id); 
    res.redirect("/");
});

app.get("/editData/:id", async (req, res) => {
    const book = await firstSchema.findById(req.params.id);
    res.render("edit", { book });
});

app.post("/updateData/:id", async (req, res) => {
    await firstSchema.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is started on: ${port}`);
});
