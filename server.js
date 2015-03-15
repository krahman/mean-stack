'use strict';


var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('app'));
app.use(express.static('app/views/posts'));
app.use(require('./controllers/api/post'));

app.listen(3000, function () {
  console.log('Server listening on ', 3000);
});
