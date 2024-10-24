const http=require("http")

const server=http.createServer(
    (req,res)=>{
        if(req.url==='/'){
            res.end("hello i am on /")
        }
        else if(req.url==='/about'){
            res.end("hello i am on /about")

        }    
        
    }
)


server.listen(3006,()=>{
    console.log("running on 3006")
})