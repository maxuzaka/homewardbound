/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

'use strict';

// MODULES //

var status = require( './status.js' );
var ping = require( './ping.js' );


// MAIN //

/**
* Registers routes on a Fastify instance.
*
* @private
* @param {Object} fastify - Fastify instance
* @param {Object} options - options
* @param {Function} done - callback to invoke upon registering route handlers
*/
function register( fastify, options, done ) {
	fastify.route( status() );
	fastify.route( ping() );
	done();
}


// EXPORTS //

module.exports = register;
