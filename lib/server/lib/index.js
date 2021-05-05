/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

'use strict';

/**
* Create an HTTP server for serving API documentation.
*
* @module TODO/server
*
* @example
* var httpServer = require( 'TODO/server' );
*
* var opts = {
*     'port': 7331,
*     'address': '0.0.0.0'
* };
* var createServer = httpServer( opts );
*
* function done( error, fastify ) {
*     if ( error ) {
*         return console.error( error.message );
*     }
*     console.log( 'Success!' );
*     fastify.server.close();
* }
*
* createServer( done );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
