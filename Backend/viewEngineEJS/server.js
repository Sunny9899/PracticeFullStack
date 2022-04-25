const express = require("express");
const app=express();
const port=8000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/data",(req,res)=>{
    const employeeData=[
          {
            name: 'Ramesh',
            designation: "SDE"
          },
          {
            name: 'Suresh',
            designation: "SE"
          },
          {
            name: 'Geeta',
            designation: "QA"
          },
    ];    
    res.render("showData",{
        employeeData
    })
})

app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}`)
})