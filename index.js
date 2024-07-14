var express=require('express');

app=express();


app.get("/six",function(req,res){
    res.append("name","hridoy")
    res.append("city","dinajpur")
    res.send("hello word");
    res.status(201).end("hello word");
    
});




app.listen( 2010, function() {

    console.log("server run success..")
});
