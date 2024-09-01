var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const { Pool } = require("pg");
app.use(express.json());

const dbReadPool_Miramar = new Pool({
    "user": "postgres",
    "password": "postgres",
    "host": "localhost",
    "port": 5432,
    "database": "miramar"
});
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
app.get("/myzone/miramar/:id", async(req, res) => {
    const rows = await readMiramarDB(req.params.id);
    res.setHeader("content-type", "application/json")
    res.send(rows)
});
start();
async function start() {
    await connect();
}
async function connect() {
    try {
        await dbReadPool_Miramar.connect();
    } catch (e) {
        console.error(`Failed to connect ${e}`)
    }
}
async function readMiramarDB(id) {
    try {
        const results = await dbReadPool_Miramar.query("select miramar_" + id + "()");
        return results.rows;
    } catch (e) {
        return [];
    }
}
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
    response.sendFile(path.join(__dirname + '/home/home.html'));
    // if (request.session.loggedin) {
    //     //response.send('Welcome back, ' + request.session.username + '!');
    //     response.sendFile(path.join(__dirname + '/home/home.html'));
    // } else {
    //     response.send('Please login to view this page!');
    // }
    //response.end();
});
app.get('/mapView', function(request, response) {
    response.sendFile(path.join(__dirname + '/mapView/index.html'));
    // if (request.session.loggedin) {
    //     //response.send('Welcome back, ' + request.session.username + '!');
    //     response.sendFile(path.join(__dirname + '/mapView/index.html'));
    // } else {
    //     response.send('Please login to view this page!');
    // }
    //response.end();
});

app.listen(8089);