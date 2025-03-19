const http = require("http")
const port = 1010;

const HandlePort=(req,res)=>{
res.write("<h1>server is started on port 1010</h1>");
res.end();
}

const server = http.createServer(HandlePort)

server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started on the port :" + port)
    }
})