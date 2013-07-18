var express = require('express');

var app = express.createServer(express.logger());

var messdata;


fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  messdata = data;
});

app.get('/', function(request, response) {
  response.send( messdata.toString('utf8', 0, 25 ));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
