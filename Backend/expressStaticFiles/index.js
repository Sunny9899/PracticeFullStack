const express= require("express");
const app=express();

app.use(express.static('assets'));

app.get('/',(req,res)=>{
    res.send(`<div>
    <p><h1>Static files</h1></p>
    <img src="/images/img1.jpg" width=300 height=300/>
    <img src="/images/img2.jpg" width=300 height=300"/>
    <img src="/images/img3.jpg" width=300 height=300/>
    </div>
    `)
})

app.listen(5000,err=>{
if(err){
    console.log(err);
}
else{
    console.log("Listening on port 5000");
}
});