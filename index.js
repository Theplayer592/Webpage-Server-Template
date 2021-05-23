//This is an example of how you most probably would want to organise your server and its contents

var express = require('express');
var app = express();

const fs = require('fs')

app.get('/', function(req, res){
  return res.sendFile(__dirname + "/index.html");
});

app.get('/Pages/:page', function(req, res){
  if(fs.existsSync(__dirname + `/Pages/${req.params.page}.html`) == true) {
    return res.sendFile(__dirname + `/Pages/${req.params.page}.html`)
  } else {
    return res.sendFile(__dirname + "/Pages/404.html")
  }
});

app.get('/Scripts/:script', function(req, res){
  if(fs.existsSync(__dirname + `/Scripts/${req.params.script}.js`) == true) {
    return res.sendFile(__dirname + `/Scripts/${req.params.script}.js`)
  } else {
    return res.sendFile(__dirname + "/Pages/404.html")
  }
})

app.get('/Styles/:stylesheet', function(req, res){
  if(fs.existsSync(__dirname + `/Styles/${req.params.stylesheet}.css`) == true) {
    return res.sendFile(__dirname + `/Styles/${req.params.stylesheet}.css`)
  } else {
    return res.sendFile(__dirname + "/Pages/404.html")
  }
})

app.get('/Assets/:asset', function(req, res){
  if(fs.existsSync(__dirname + `/Assets/${req.params.asset}`) == true) {
    return res.sendFile(__dirname + `/Assets/${req.params.asset}`)
  } else {
    return res.sendFile(__dirname + "/Pages/404.html")
  }
})

app.get('/JSON/:json', function(req, res){
  if(fs.existsSync(__dirname + `/JSON/${req.params.json}.json`) == true) {
    return res.sendFile(__dirname + `/JSON/${req.params.json}.json`)
  } else {
    return res.sendFile(__dirname + "/Pages/404.html")
  }
})

app.get('/Forbidden', function(req, res){
  return res.sendStatus(403)
})

app.get('/Forbidden/:forbidden', function(req, res){
  return res.sendStatus(403)
})

app.get('/AprilFools', function(req, res) {
  return res.sendStatus(418)
})

app.get('/sw', function(req, res){
  res.sendFile(__dirname + "/service-worker.js")
})

app.get('/robots.txt', function(req, res){
  res.sendFile(__dirname + "/robots.txt")
})

app.get('/robots', function(req, res){
  res.sendFile(__dirname + "/robots.txt")
})

app.get('*', function(req, res){
  return res.sendFile(__dirname + "/Pages/404.html")
})

var server = app.listen(3000, function() {
  console.log("Server has started up.")
});