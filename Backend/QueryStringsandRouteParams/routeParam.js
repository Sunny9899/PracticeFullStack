const express=require("express");
const app=express();
const port = 2346;

app.use(express.json());

app.get("/:name/:age",(req,res)=>{
    let name=req.params.name;
    let age=req.params.age;
   
    res.status(200).send({
        "name":name,
        "age":age
    });

})

app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Listening to port ${port}`);
})