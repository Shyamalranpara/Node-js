// const AddData = require("../model/schema")

// module.exports.addGetData = (req, res) => {
//     const { name, subject } = req.query;
//     console.log("Name:", name);
//     console.log("Subject:", subject);
    
//     // You can process this data or send to DB etc.
//     res.json({ msg: "GET data received", name, subject });
// };

// // module.exports.addGetData = (req, res) => {
// //     console.log("Query Params:", req.query); // <--- yeh print karega ?name=...&subject=...
// //     res.json({ msg: "GET request received", data: req.query });
// // };
// module.exports.addData = (req, res) => {
//     console.log(req.body);  
//     res.json({ msg: "Data received", data: req.body });
// };

// module.exports.addDeleteData = (req, res) => {
//     const id = req.params.id;
//     console.log("Deleting item with ID:", id);

//     // 👇 Normally, yahan DB se delete karte (example ke liye fake response)
//     res.json({ msg: `Item with ID ${id} deleted successfully` });
// };

const schema = require("../model/schema")
const bcrypt = require("bcryptjs")

module.exports.register = async(req,res)=>{
    let user = await schema.findOne({email:req.body.email})

    if(user){
        return res.status(200).json({msg: "User already existed"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10)

    await schema.create(req.body).then((data)=>{
        return res.status(200).json({msg: "User successfully created !",user : data})
    })
}