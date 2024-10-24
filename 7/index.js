const http=require("http")

const server=http.createServer(
    (req,res)=>{
        res.end("GYM CHLE JAO")
    }

)
server.listen(3006)