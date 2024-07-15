var express=require('express');

app=express();


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
  
   let fistName=req.header.fistName;
   let lestName=req.header.lestName;
    res.end( fistName+" "+lestName)
     
 });
  



app.listen( 3060, function() {

    console.log("server run success..")
});
