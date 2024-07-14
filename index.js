var express=require('express');

app=express();

app.get("/",function(req,res){

res.send("hello word")
});
app.get("/about",function(req,res){
    res.send("about page")

});
app.get("/concat",function(req,res){

    res.send("concat page ")

});
app.get("/login",function(req,res){

    res.send("login page ")
});


app.listen( 2050, function() {

    console.log("server run success..")
});
