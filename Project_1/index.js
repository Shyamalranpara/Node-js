const express = require("express");
const port = 1213;
const path = require("path")
const app = express();
const db = require("./config/db");
const firstSchema = require("./model/firstSchema");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))

// Route to fetch all books and render the homepage
app.get("/", async (req, res) => {
    const books = await firstSchema.find({}); // Fetch books from MongoDB
    res.render("index", { books }); // Pass the fetched books to the view
});

// Route to add a new book
app.post("/addData", async (req, res) => {
    await firstSchema.create(req.body);
    res.redirect("/");
});

// Route to delete a book
app.get("/deleteData", async (req, res) => {
    await firstSchema.findByIdAndDelete(req.query.id); // Delete the book by _id
    res.redirect("/");
});

// Route to render the edit page
app.get("/editData/:id", async (req, res) => {
    const book = await firstSchema.findById(req.params.id);
    res.render("edit", { book });
});

// Route to update a book
app.post("/updateData/:id", async (req, res) => {
    await firstSchema.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

// Start the server
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is started on: ${port}`);
});
