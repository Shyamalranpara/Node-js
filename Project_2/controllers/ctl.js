const Addmin = require("../model/addminSchema");

module.exports.firstPage = async (req, res) => {
    let data = await Addmin.find({});
    res.render("seoDash", { data });
};

module.exports.seoDash = (req, res) => {
    if(req.cookies.Addmin){
        res.render("seoDash");
    }else{
        res.redirect("/")
    }
};

module.exports.addAdmin = async (req,res)=>{
    if(req.cookies.Addmin){

        res.render("addAdmin")
    }else{
        res.redirect("/")
    }
};

module.exports.addAdminData = async (req,res)=>{
    await Addmin.create(req.body).then(()=>{
        res.redirect("/addAdmin")
    })
}

module.exports.viewAdmin = async (req, res) => {
    if(req.cookies.Addmin){

        try {
             const data = await Addmin.find({}); 
             console.log(data);
            res.render("viewAdmin", { data }); 
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }

    }else{
        res.redirect("/")
    }
};

module.exports.deleteAdmin = async (req,res)=>{
    await Addmin.findByIdAndDelete(req.query.id).then(()=>{

        res.redirect("/viewAdmin")
    });
};

module.exports.editAdminData= async (req,res)=>{
    const data = await Addmin.findById(req.params.id)
    res.render("edit", { data });
};

module.exports.updateAdminData = async (req, res) => {
    await Addmin.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });
    res.redirect("/viewAdmin");
};

module.exports.login=(req,res)=>{
res.render("login")
};

module.exports.loginData = async (req, res) => {
    let admin = await Addmin.findOne({ email: req.body.email });
    if (!admin) {
        return res.redirect("/"); 
    }
    if (req.body.password == admin.password) {
        res.cookie("Addmin", Addmin);
        return res.redirect("/seoDash"); 
    }
    return res.redirect("/"); 
};