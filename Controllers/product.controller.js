const Product=require('../Models/products.model');


exports.test=(req,res)=>{
    res.send("Greeting from test controller");

}
exports.product_create=(req,res)=>{
    let product=new Product({
        name: req.body.name,
        price: req.body.price
    })
    product.save((err)=>{
        return next(err)

    }
    );
    res.send("Product created successfully")

}
exports.product_update=(req,res)=>{
    Product.findByIdAndUpdate(req.params,{$set: req.body},(err,product)=>{
        if(err)return next(err);
        req.send("Updated successfully")

    })

}
exports.product_delete=(req,res)=>{

}
exports.product_details=(req,res)=>{
 Product.findById(req.params.id, (err,product)=>{
     if(err)return next(err);
     res.send(product)
 })   
    
}