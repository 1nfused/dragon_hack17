var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express()

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',  function(req, res){
  res.send("Hi, my name is chatbot");
});

app.get('/webhook/', function(req, res){
    if(req.query['hub.verify_token'] == "dragonhack2017"){
      res.send(req.query['hub.challenge']);
    }
    res.send("Wrong token");
})



app.listen(app.get('port'), function(){
  consol.log("App started");
});
