const fs=require("fs") 
const crypto=require("crypto")
const value=30;
console.log("first Line")
const data=crypto.pbkdf2Sync("password","salt",10000000,100,"sha512")
console.log("password is hashed")
setTimeout(()=>{console.log("setTimeout")},0)
fs.readFile("one.txt","utf-8",(err,data)=>{ // utf-8 => encoding for file to open
console.log("Data in the file:",data)
})
function multiply(x,y){
 return x*y
}

const res=multiply(value,5);
console.log("result:",res);