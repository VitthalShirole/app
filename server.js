var express= require("express");
var app=express();
var path = require("path");
var fs=require("fs");
var staticFolder=express.static(path.join(__dirname,"public"));

app.use(staticFolder)

app.get('/',(req,res)=>
{
    res.sendFile("index.html");
})

app.listen(3000);
console.log("server is running on port 3000");