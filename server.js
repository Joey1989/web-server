var express = require('express');
var app = express();
var Port = 3000;

app.get('/', function(req, res){
	res.send('hello');
});

app.use(express.static(__dirname + '/public'));

app.listen(Port, function(){
	console.log('server started PORT:'+Port );
});