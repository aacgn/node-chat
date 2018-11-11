const express = require('express');
const path = require('path');
const {transports, createLogger, format } = require('winston');

const PORT = process.env.PORT || 8080;

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
    server.listen(PORT, () => {
        let logger = createLogger({
            format: format.combine(
                format.cli(),
                format.timestamp(),
                format.colorize(),
                format.printf((info) => {
                    return `[${new Date(info.timestamp).toUTCString()} | ${info.level}] ${info.message}`;
                })
            ),
            transports: [
                new transports.Console(),
            ],
        })
        logger.warn('[Started] Server was initialized on port ' + PORT);
    });
}
