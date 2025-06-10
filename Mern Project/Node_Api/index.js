const express = require("express");
const cors = require("cors")
const port = 1030

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/",require("./routes/route"));

app.listen((port),err=>{
    err ? console.log(err) : console.log(`server is started on port:${port}`)
})