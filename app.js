const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(9000, function(){
    console.log("Server initiated at port 9000");
});

app.get('/styles.css', function(req,res){
    res.sendFile(__dirname + "/" + "styles.css");
});

app.get('/script.js', function(req,res){
    res.sendFile(__dirname + "/" + "script.js")
});

app.get('/dataProcessingModule.js', function(req,res){
    res.sendFile(__dirname + "/" + "dataProcessingModule.js")
});

app.get('/datepickerModule.js', function(req,res){
    res.sendFile(__dirname + "/" + "datepickerModule.js")
});

app.get('/ajaxModule.js', function(req,res){
    res.sendFile(__dirname + "/" + "ajaxModule.js")
});