var express=require("express");
var path=require('path');

var app=express();
var port=process.env.PORT || 3000;
var publicPath=path.join(__dirname,"public");
app.use(express.static(publicPath));
/*    res.send("Hello  ...");
});*/
app.get('/',function(req,res){
    res.render("index");
});

app.listen(port,function(){
    console.log('Server started');
});
