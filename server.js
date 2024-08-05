var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('Hello, world!');
});

app.listen(3000, function() {
    console.log('Serrver running at http://localhost:3000');
});