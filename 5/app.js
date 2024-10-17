const crypto=require("crypto");
const start=new Date()
console.log("first line")

console.log(process.env.UV_THREADPOOL_SIZE)


crypto.pbkdf2("password","salt",300000,500,"sha512",()=>{
    console.log(`password hashsed 1 ${Date.now()-start}ms`); 
})

crypto.pbkdf2("password","salt",20000,500,"sha512",()=>{
    console.log(`password hashsed 2 ${Date.now()-start}ms`); 
})

crypto.pbkdf2("password","salt",200000,500,"sha512",()=>{
    console.log(`password hashsed 3 ${Date.now()-start}ms`); 
})

crypto.pbkdf2("password","salt",20000,500,"sha512",()=>{
    console.log(`password hashsed 4 ${Date.now()-start}ms`); 
})

crypto.pbkdf2("password","salt",200000,500,"sha512",()=>{
    console.log(`password hashsed 5 ${Date.now()-start}ms`); 
})

console.log("last line")

