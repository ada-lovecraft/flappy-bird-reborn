var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
 
app.use(express.static(__dirname + "/dist"));

app.listen(port, function() {
  console.log("Listening on " + port);
});