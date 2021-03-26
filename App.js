const http=require('http');
var htp=require('./MyFirstModule')

http.createServer(function(req, res){
    res.writeHead(200, {'Context-Type': 'text/plain'})
    res.end("Hello World. Todays Date is "+htp.GiveDate());

}


).listen(8080, ()=>{
    console.log("The server is running on 8080")
})