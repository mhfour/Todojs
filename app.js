var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');

var app = express();

app.get('/', function (req,res){
    res.sendFile(__dirname + '/index.html');
})

//app.set('view engine', 'ejs');

//app.use(express.static('./views'));

app.listen(3000);
console.log('You are listening to port 3k'); 