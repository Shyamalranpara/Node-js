const Addmin = require("../model/addminSchema");
let mailer = require("../middleware/nodemailer");

module.exports.firstPage = async (req, res) => {
    let data = await Addmin.find({});
    res.render("seoDash", { data });
};

module.exports.seoDash = (req, res) => {
    // if(req.cookies.Addmin){
        res.render("seoDash");
    // }else{
        // res.redirect("/")
    // }
};

module.exports.addAdmin = async (req,res)=>{
    // if(req.cookies.Addmin){

        res.render("addAdmin")
    // }else{
        // res.redirect("/")
    // }
};

module.exports.addAdminData = async (req,res)=>{
    await Addmin.create(req.body).then(()=>{
        res.redirect("/addAdmin")
    })
}

module.exports.viewAdmin = async (req, res) => {
    // if(req.cookies.Addmin){

        try {
             const data = await Addmin.find({}); 
             console.log(data);
            res.render("viewAdmin", { data }); 
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }

    // }else{
        // res.redirect("/")
    // }
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
    // let admin = await Addmin.findOne({ email: req.body.email });
    // if (!admin) {
    //     return res.redirect("/");
    // }
    
    // if (req.body.password == admin.password) {
    //     res.cookie("Addmin", admin._id.toString());
    req.flash("success","successfully added")
         res.redirect("/seoDash");
    // }
    
    // return res.redirect("/");
    
};
module.exports.logout = (req,res)=>{
    res.redirect("/")
}
module.exports.profile = (req,res)=>{
    res.render("profile")
}

module.exports.changePassword = (req, res) => {
    res.render("changePassword");
  };
  
module.exports.changePass = async(req,res)=>{
    // console.log(req.body)
    let admin = req.user;
    if(admin.password == req.body.oldPass){
        if(admin.password != req.body.newPass){
          if(req.body.newPass == req.body.confirmPass){
            await Addmin.findByIdAndUpdate(admin.id,{password : req.body.confirmPass}).then(()=>{
              res.redirect("/logout")
            })
          }else{
            req.flash("error", "New password and Confirm Password has to be same!");
            res.redirect("/changePassword");
          }
        }else{
           req.flash("error", "New password has to be different!");
           res.redirect("/changePassword");
        }
      }else{
        req.flash("error","Old password is worng!")
        res.redirect("/changePassword")
      }
}

module.exports.lostPassword=(req,res)=>{
    res.render("lostPass");
}

   module.exports.lostPass = async (req, res) => {
   

       let admin = await Addmin.findOne({ email: req.body.email });
       if (!admin) {
           return res.redirect("/");
       }

       let otp = Math.floor(Math.random() * 100000 + 900000);
       req.otp = otp;
       req.adminData = admin;
       mailer.sendMail(req.body.email, otp);
       res.render("forgetPass");
   };
   
   
module.exports.forgetPassword=(req,res)=>{
    res.render("forgetPass");
}
module.exports.forgetPass = async(req,res)=>{
let otp = req.session.otp;
let admin = req.session.adminData;

if(req.body.otp == otp){
    if(req.body.newPass == req.body.confirmPass){
       await schema.findByIdAndUpdate(admin.id,{password : req.body.confirmPass}).then(()=>{
         res.redirect("/")
       })
     }else{
       res.redirect("/changePassword");
     }
 }else{
   res.redirect("/")
 }

}