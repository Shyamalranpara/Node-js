const passport = require("passport");
const localSt = require("passport-local").Strategy;
const addminSchema = require("../model/addminSchema");

passport.use(
    "localSt",
    new localSt({
        usernameField:"email"},async (email,password,done)=>{
            let admin = await addminSchema.findOne({email: email})

            if(admin){
                if(password == admin.password){
                    done(null,admin)
                }else{
                    return done(null,false)
                }
            }
            else{
                return done(null,false)
            }
        })
);

passport.serializeUser((admin,done)=>{
    done(null,admin.id);
})

passport.deserializeUser(async (adminID,done)=>{
    let admin = await addminSchema.findById(adminID);
    if(admin){
        done(null,admin);
    }else{
        console.log("admin not found")
    }
})

passport.checkAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect("/")
    }
}
module.exports = passport;