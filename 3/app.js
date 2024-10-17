// const fs=require("fs")
// const value=10;
// console.log("first line")

// setTimeout(()=> console.log("setTimeOut"),2000);

// fs.readFile("one.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// function multiply(x,y){
//     return x*y;
// }
// const result=multiply(value,5);
// console.log("result is: ",result);



// const fs=require("fs")
// const crypto=require("crypto")
// const value=10;
// console.log("first line")

// setTimeout(()=> console.log("setTimeOut"),2000);

// crypto.pbkdf2("password","salt",100000,100,"sha512",()=>{
//     //password,salt(we do in database),no of iterations,length of hashedpassword,which algorithm to use
//     console.log("password is hashed")
// })

// fs.readFile("one.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// function multiply(x,y){
//     return x*y;
// }


// const result=multiply(value,5);
// console.log("result is: ",result);




const fs=require("fs")
const crypto=require("crypto")
const value=10;
console.log("first line")


crypto.pbkdf2Sync("password","salt",1000000,100,"sha512")
console.log("password is hashed")

setTimeout(()=> console.log("setTimeOut"),1000);

fs.readFile("one.txt","utf-8",(err,data)=>{
    console.log(data)
})
function multiply(x,y){
    return x*y;
}


const result=multiply(value,5);
console.log("result is: ",result);