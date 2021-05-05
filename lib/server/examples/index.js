/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

'use strict';

var join = require( 'path' ).join;
var httpServer = require( './../lib' );

var opts = {
	'port': 3000,
	'address': '127.0.0.1',
	'logger': true,
	'root': join( __dirname, 'fixtures' ),
	'template': '<html><body>Fragment: {{ FRAGMENT }}</body></html>'
};

var createServer = httpServer( opts );

function done( error, fastify ) {
	if ( error ) {
		console.error( error.message );
		return;
	}
	console.log( 'Success!' );
	console.log( fastify.server.address() );
	fastify.server.close();
}

createServer( done );
