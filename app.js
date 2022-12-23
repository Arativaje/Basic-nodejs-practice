// const {sum} = require("./helpers");
// const express = require('express');
// const app = express();

// app.get('/', function(req, res){
//     res.send('Hello World!');
// });

// app.listen(3000);

// // const http = require("http");

// // const server = http.createServer((req,res)=>{
// //     res.end("hello world!");
// // });

// // server.listen(3000);


// const total=sum(10,20);
// console.log(total);

const fs = require("fs");
const fileName = "target.txt";
//fs.watch(fileName, () => console.log(`file changed!`));

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err,data)=>{
    if(err)errHandler(err);
    dataHandler(data);
});
console.log("Node js is async programming language....");