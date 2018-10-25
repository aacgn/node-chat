const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const IP = process.env.IP || 'localhost';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var socket;

let messages = [];

initialize();

function initialize() {
    configure();
    estabilishSocketConnection();
    startHttpServer();
}

function configure() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', path.join(__dirname, 'public'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    
    app.use('/', (req, res) => {
        res.render('index.html');
    });
}

function estabilishSocketConnection() {
    io.on('connection', ioSocket => {
        socket = ioSocket;
        loadPreviousMessages();
        configureSendMessageListener();
    })
}

function loadPreviousMessages() {
    socket.emit('previousMessage', messages);
}

function configureSendMessageListener() {
    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('recivedMessage', data);
    });
}

function startHttpServer() {
    server.listen(PORT, IP);
    console.log('Server started on http://' + IP + ':' + PORT);
}
