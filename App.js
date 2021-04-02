const express=require('express');
const bodyparser=require('body-parser');
const product=require('./routes/product.route');
const app=express();
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost/productDB",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the database")
}).catch(err =>{
    console.log("Error"+err)
    process.exit()
})
app.use(bodyparser.json()) 
app.use(bodyparser.urlencoded({extended: true}))


app.use('/products',product)
app.listen(8000,()=>{
    console.log("Server is runninf on port 8000")
});