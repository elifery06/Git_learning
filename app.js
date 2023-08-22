const express= require("express");
const app=express();
const port=process.env.PORT || 5001

app.get("/",(req,res)=>{
    res.json({
        message:"hoş geldiniz" 
    })
})
app.listen(port,()=>{
    console.log(`server ${port} portundan çalışıyor`)
})