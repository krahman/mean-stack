var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-stack', function () {
  console.log('mongodb connected');
});
module.exports = mongoose;
