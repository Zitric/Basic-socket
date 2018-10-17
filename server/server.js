const express = require( 'express' );
const socketIO = require( 'socket.io' );
const http = require( 'http' );
const path = require( 'path' );

const app = express();
const server = http.createServer( app );

const publicPath = path.resolve( __dirname, '../public' );
const port = process.env.PORT || 3000;

app.use( express.static( publicPath ));

module.exports.io = socketIO( server );
require( './sockets/socket' );

server.listen( port, ( err ) => {

    if ( err ) throw new Error( err );

    console.log( `Server running on the port ${ port }` );

});