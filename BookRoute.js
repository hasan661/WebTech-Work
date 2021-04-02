var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    res.send('Retrieve all books')
})

router.post('/',(req,res)=>{
    res.send('Add a book')
})
router.put('/',(req,res)=>{
    res.send('update a book')
})
router.delete('/',(req,res)=>{
    res.send('Delete a book')
})
module.exports=router