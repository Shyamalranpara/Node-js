const subCatSchema = require("../model/subCatSchema")
const productCatSchema = require("../model/productCatSchema") 

module.exports.addProductCat=async(req,res)=>{
    await subCatSchema.find({}).then((data)=>{
        res.render("addProductCat",{data})
    })
}
   module.exports.addProductCategory = async (req, res) => {
       console.log(req.file); 
       if (!req.file) {
           return res.status(400).send('No file uploaded.');
       }
       req.body.image = req.file.path;
       await productCatSchema.create(req.body).then(() => {
           res.redirect("/productCategory/addProductCat");
       });
   };
   
module.exports.viewProductCat=async(req,res)=>{
    await productCatSchema.find({}).populate({
        path:"subCategoryId",
        populate:{
            path:"categoryId"
        }
    }).then((data)=>{
        res.render("viewProductCat",{data})
    })
}