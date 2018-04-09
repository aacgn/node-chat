var socket = io();

function renderMessage(message) {
    $('.messages').append('<div class="message"><strong>'+message.author+': </strong>'+message.message+'</div>')
}

socket.on('recivedMessage', function(message) {
    renderMessage(message);
});

socket.on('previousMessage', function(messages) {
    for (message of messages){
        renderMessage(message);
    }
});

$('#chat').submit(function(event) {
    event.preventDefault();

    var author = $('input[name=username]').val();
    var message = $('input[name=message]').val();

    if ( author.length && message.length) {
        var messageObject = {
            author: author,
            message: message
        };

        renderMessage(messageObject);

        socket.emit('sendMessage', messageObject);
        
        $('input[name=message]').val("");
        
    }
});