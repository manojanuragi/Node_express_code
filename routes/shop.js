const express=require('express');
const router=express.Router()
const path= require('path');

router.get('/',(req,res,next)=>{
    console.log("middle warw!3");
    res.sendFile(path.join(__dirname,'../' ,'viws','shop.html'))

});

module.exports=router;