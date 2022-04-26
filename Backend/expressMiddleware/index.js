const express=require("express");
const app=express();
const server=require("./server");
const port=3000;

app.use(express.json());

app.use("/server",server);


app.listen(port,console.log(`Listening on port ${port}`));
