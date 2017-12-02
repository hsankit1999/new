var express=require("express");
var path=require('path');
var os=require('os');
var app=express();
var port=process.env.PORT || 3000;
var publicPath=path.join(__dirname,"public");
//app.use(express.static(publicPath));
/*    res.send("Hello  ...");
});*/
app.get('/',function(req,res){
    res.send(req.ip);
});



app.listen(port,function(){
    console.log('Server started');
});
