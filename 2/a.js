
// function pro(x,y){
//     return x*y;
// }
// module.exports=pro

const fs=require("fs")

// fs.writeFile("one.txt","data to be writtennnnnnnnnnnnnn",()=>{
//     console.log("print kr dia");
// })


// fs.readFile("one.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

fs.appendFile("one.txt","   hello jey",()=>{
    console.log("append bhi krdia");
})

fs.readFile("one.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.appendFile("one.txt","   prabhpreet",()=>{
    console.log("append bhi krdia");
})

fs.readFile("one.txt","utf-8",(err,data)=>{
    console.log(data);
})

//readFile is asynchronous task so pehle read wla chl jayega


