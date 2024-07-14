var express=require('express');

app=express();


app.get("/six",function(req,res){
   res.cookie("name","hridoy")
   res.cookie("roll","50015")
   res.cookie("city","dinajpur")
   res.end("hello word")
    
});




app.listen( 2030, function() {

    console.log("server run success..")
});
