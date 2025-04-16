const firstSchema = require("../model/firstSchema");
const fs = require("fs")

module.exports.firstPage = async(req,res)=>{
    let data = await firstSchema.find({});
    res.render("index",{data});
};

module.exports.addData=async(req,res)=>{
    
    req.body.image=req.file.path

    // console.log(req.body)
    // console.log(req.file)
    await firstSchema.create(req.body)  
    .then(()=>{
         res.redirect("/")
     })
}

module.exports.deleteData=async(req,res)=>{
    let singledata = await firstSchema.findById(req.query.id);
    fs.unlinkSync(singledata.image) ;
    const data = await firstSchema.findByIdAndDelete(req.query.id);
    res.redirect("/");
}

module.exports.editData= async (req, res) => {
    const data = await firstSchema.findById(req.params.id);
    res.render("edit", { data });
}

module.exports.updateData=async (req, res) => {

    let singledata = await firstSchema.findById(req.body.id);
    let pic = req.file ? req.file.path : singledata.image;
    req.file && fs.unlinkSync(singledata.image) ;
    req.body.image=pic
    let updatedData = await firstSchema.findByIdAndUpdate(req.body.id, req.body);
    // await firstSchema.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
}