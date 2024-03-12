const express=require('express');
const router=express.Router()
const path=require('path');
//   ./admin/add-user get 
router.get('/add-users',(req,res,next)=>{
    console.log("middle warw!3");
    res.sendFile(path.join(__dirname,'../' ,'viws','add-users.html'))
});

//   ./admin/add-user post
router.post('/add-users',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
   
});

module.exports = router ;