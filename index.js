var express=require('express');

app=express();

app.get("/",function(req,res){

let myObjat =[
{
    name:"hridoy",
    city:"dinajpur",
    age:22,
    maill:"korkor",
},
{
    name:"riya",
    city:"soidpur",
    age:15,
}
]

    res.json(myObjat);
    
});

app.listen( 2030, function() {

    console.log("server run success..")
});
