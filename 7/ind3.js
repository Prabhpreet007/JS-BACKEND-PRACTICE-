const express=require("express")

const app=express()

// app.use("/",(req,res)=>{
//     // console.log("app.use")
//     res.send("Response Data")
//     console.log(req.query)
//     //i wrote this in link {http://localhost:8000/?name=prabh}
// })

app.get("/search",(req,res)=>{
    console.log(req.query)
    if(req.query.username !== undefined){ 
        res.send(`search reqqq done ${req.query.username}`)
    }
    else{
        res.send("no data")
    }
})
// http://localhost:8000/search?username=prabhpreet

app.get("/search/:name",(req,res)=>{
    // console.log("pp",req.query)
    console.log("Log")
    console.log("Name: ", req.params)
    res.send(`search req doneee ${req.params.name}`)
})
//its necessary to send the data 
//http://localhost:8000/search/prabhpreet
// if not sent the data like this then error



app.listen(8000,()=>{
    console.log("server started at port 8000")
})