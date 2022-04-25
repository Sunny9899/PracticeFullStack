const express=require("express");
const app=express();
const port = 2345;

app.use(express.json());
//use http://localhost:2345/?page=2&limit=3 as a url
app.get("/",(req,res)=>{
    let page=req.query.page;
    let limit=req.query.limit;
   
    res.status(200).send({
        "page":page,
        "limit":limit
    });

})

app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Listening to port ${port}`);
})