var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/views/index.html');
})

app.get('/api/posts', function(req, res) {
	res.json([
		{
			username: 'khalxxxxx',
			body: 'node rules!!'
		}
	]);
});

app.post('/api/posts', function(req, res, next) {
	console.log('post received!');
	if (!req.body) return res.sendStatus(400);
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	});	
	post.save(function(err, post){
		if(err) return next(err);
		res.status(201).json(post); 
	});	
});

app.listen(3000, function(){
	console.log('Server listening on ', 3000);
});
