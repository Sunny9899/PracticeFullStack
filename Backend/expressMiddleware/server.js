const express=require("express");
const router=express.Router();
const movieData=require("./movies.json")

const name=(req,res,next)=>{
   res.body="Suryansh"; // "s"
   next();
}

router.get("/",name,(req,res)=>{
    if(res.body==="Suryansh"){
    res.status(200).send({message:"Data fetch Successful", client:`Data requested by ${res.body}`, data:movieData});
    return;
    }
    res.status(511).send({message:"Authentication Failed"});
})

module.exports=router;
