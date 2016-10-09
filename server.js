var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send('hello');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('server started PORT:'+PORT );
});