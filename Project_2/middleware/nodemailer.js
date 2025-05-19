const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"shyamalranpara7846@gmail.com",
        pass:"fhxcqgwjjcihxufq",
    },

});
module.exports.sendMail=(to,otp)=>{
    let mailOptions={
        to:to,
        from:"shyamalranpara7846@gmail.com",
        subject:"Password Reset OTP",
        text:`Password Reset OTP is ${otp}`
    };
    transport.sendMail(mailOptions);
    console.log("email sended successfuly!");
}