var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/posts', function(req, res) {
	res.json([
		{
			username: 'khalxxxxx',
			body: 'node rules!!'
		}
	]);
});

app.post('/api/posts', function(req, res) {
	console.log('post received!');
	if (!req.body) return res.sendStatus(400);
	console.log(req.body.username);
	console.log(req.body.body);
	res.sendStatus(201);
});

app.listen(3000, function(){
	console.log('Server listening on ', 3000);
});
