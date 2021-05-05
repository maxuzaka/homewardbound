/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { resolve, join } from 'path';
import httpServer from './../lib/server';
import config from './../src/config.js';
import App from './../src/server.jsx';


// VARIABLES //

var BUILD_DIR = resolve( __dirname, '..', 'public', 'docs', 'api' );
var PORT = 3000;


// FUNCTIONS //

/**
* Returns an application shell template.
*
* @private
* @returns {string} template
*/
function template() {
	var str = fs.readFileSync( join( BUILD_DIR, 'index.html' ), 'utf8' );
	return str.replace( '<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString( <App /> )}</div>` );
}

/**
* Callback invoked upon starting a server.
*
* @private
* @param {(Error|null)} error - error object
* @param {Object} fastify - fastify instance
*/
function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Server is running...' );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var opts = {
		'latest': config.versions[ 0 ],
		'logger': true,
		'port': PORT,
		'prefix': '/',
		'root': BUILD_DIR,
		'static': BUILD_DIR,
		'template': template()
	};
	httpServer( opts )( done );
}

main();
