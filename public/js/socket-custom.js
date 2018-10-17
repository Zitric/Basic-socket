let socket = io();

socket.on( 'connect', () => {
    console.log('Connected to the server');
});

socket.on( 'disconnect', () => {
    console.log('Servers connection lost');
});

socket.emit( 'sendMessage', {
    user: 'Julian',
    message: 'Hello world'
}, ( res ) => {
    console.log( 'Response from the server: ', res );
});

socket.on( 'sendMessage', ( message ) => {
    console.log( 'The message from the server is:', message.message );
});