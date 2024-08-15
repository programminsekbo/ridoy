var express=require('express');
var bodyParser=require('body-parser')
var app=express();
app.use(bodyParser.json());


app.get("/six",function(req,res){
   res.cookie("name","hridoy")
   res.cookie("roll","50015")
   res.cookie("city","dinajpur")
   res.end("hello word")
    
});


app.get("/six",function(req,res){
    res.cookie("name","hridoy")
    res.cookie("roll","50015")
    res.cookie("city","dinajpur")
    res.end("hello word")
     
 });

 app.post("/",function(req,res){
  
   let userName=req.header("userName")
   let password=req.header("password")
    res.end("user Name:"+userName+" password:"+password)
     
 });
  



app.listen( 1060, function() {

    console.log("server run success..")
});
