var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome to my house")
    
})
router.get('/about',(req,res)=>{
    res.send("Welcome to my about")
    
})

module.exports=router