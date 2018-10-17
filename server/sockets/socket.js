const { io } = require( '../server' );

io.on( 'connection', ( client ) => {

    console.log( 'User connected' );

    client.on( 'disconnect', () => {
        console.log( 'User disconnected' );
    });

    client.on( 'sendMessage', ( data , callback ) => {

        console.log('data: ', data);

        // Emit to all users connected
        client.broadcast.emit( 'sendMessage', data );

        // if ( message.user ) {
        //     callback({
        //         res: 'Everything is ok'
        //     });
        // } else {
        //     callback({
        //         res: 'The user dont exist, ERROR'
        //     });
        // }

    });

    client.emit( 'sendMessage', {
        user: 'Admin',
        message: 'Welcome, you are connected to the socket'
    });

});