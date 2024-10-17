const fs=require("fs")
const crypto=require("crypto")
const value=10;
console.log("first line")


crypto.pbkdf2Sync("password","salt",1000000,100,"sha512")
console.log("password is hashed")

setTimeout(()=> console.log("setTimeOut"),0);
setImmediate(()=>console.log("setImmediate"));

fs.readFile("one.txt","utf-8",(err,data)=>{
    console.log(data)
})
function multiply(x,y){
    return x*y;
}


const result=multiply(value,5);
console.log("result is: ",result);