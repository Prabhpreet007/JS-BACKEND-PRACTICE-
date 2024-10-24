const express=require("express")

const app=express()

const user=["helloji","hiiji","byeeji"]
app.get("/search",(req,res)=>{
    console.log("hello")
    res.json(`users ${user}`)
})

// https://www.google.com/search?q=flowers
// this is get request and in this if i change the flowers to cars then it will search cars too 

app.listen(8000,()=>{
    console.log("server started at port 8000")
})