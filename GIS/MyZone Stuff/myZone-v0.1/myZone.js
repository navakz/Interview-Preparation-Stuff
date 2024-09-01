var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// viewed at http://localhost:8089
app.use(express.static(__dirname + '/assets'));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login/login.html'));
});
app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username === 'myzone' && password === 'myzone') {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/home');
    } else {
        response.send('Please enter Username and Password!');
    }
    response.end();
});
app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        //response.send('Welcome back, ' + request.session.username + '!');
        response.sendFile(path.join(__dirname + '/home/home.html'));
    } else {
        response.send('Please login to view this page!');
    }
    //response.end();
});
app.get('/mapView', function(request, response) {
    if (request.session.loggedin) {
        //response.send('Welcome back, ' + request.session.username + '!');
        response.sendFile(path.join(__dirname + '/mapView/index.html'));
    } else {
        response.send('Please login to view this page!');
    }
    //response.end();
});

app.listen(8089);


// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// var server = http.createServer(function(request, response) {
//     var path = url.parse(request.url).pathname;

//     switch (path) {
//         case '/':
//             response.writeHead(200, { 'Content-Type': 'text/plain' });
//             response.write("This is Test Message.");
//             response.end();
//             break;

//         case '/login':
//             fs.readFile(__dirname + path, function(error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, { 'Content-Type': 'text/html' });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;

//         case '/register':
//             fs.readFile(__dirname + path, function(error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, { 'Content-Type': 'text/html' });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;

//         default:
//             response.writeHead(404);
//             response.write("opps this doesn't exist - 404");
//             response.end();
//             break;
//     }
// });

// server.listen(8082);