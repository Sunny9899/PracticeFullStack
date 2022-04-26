const express=require("express");
const router=express.Router();
const users=require("./users.json");

router.get("/",(req,res)=>{ 
    res.status(200).send({message:"Get Successful",data:users})
});

router.post("/",(req,res)=>{
    const newUsers=[...users,req.body];
    res.send({message:"Post Successful",data:newUsers});
});

module.exports=router;
