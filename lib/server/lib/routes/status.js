/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

'use strict';

// MAIN //

/**
* Defines a route handler for returning the server's status.
*
* @private
* @returns {Object} route declaration
*/
function route() {
	var schema = {
		'method': 'GET',
		'url': '/status',
		'schema': {
			'response': {
				'200': {
					'type': 'string'
				}
			}
		},
		'handler': onRequest
	};

	return schema;

	/**
	* Callback invoked upon receiving an HTTP request.
	*
	* @private
	* @param {Object} request - request object
	* @param {Object} reply - reply object
	* @returns {void}
	*/
	function onRequest( request, reply ) {
		reply.type( 'text/plain' );
		reply.send( 'OK' );
	}
}


// EXPORTS //

module.exports = route;
