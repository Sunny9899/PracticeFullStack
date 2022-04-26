const express=require("express");
const app=express();
const server=require('./server.js');
const port = 3000;

app.use(express.json());
app.use('/userServer',server);

app.listen(port,
    console.log(`Listening on port ${port}`)
)