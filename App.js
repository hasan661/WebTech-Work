var birds=require('./RouteMode')
var biding=require('./BookRoute')
var express=require('express')
var app=express()

app.use('/books',biding)


app.use('/Students',birds)

var server=app.listen(3000, ()=>{

    console.log('Server is running on 3000 port number')
})