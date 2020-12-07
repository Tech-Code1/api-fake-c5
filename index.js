var jsonServer = require('json-server');
var db = require('./db.js');
var fs = require('fs');

var server = jsonServer.create();

fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

var router = jsonServer.router('./db.json');
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);