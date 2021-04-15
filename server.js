const express =require('express');
const app = express();
const fs = require('fs')

const PORT=8081;


app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/',express.static(__dirname+'/build'));


app.use('*',(req,res)=>{
    res.redirect('/')
})


app.listen(PORT,()=>{
    console.log("Frontend Server Started ",PORT)
})