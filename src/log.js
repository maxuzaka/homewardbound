/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MAIN //

/**
* Logs a provided value.
*
* @private
* @param {*} value - value to log
* @returns {void}
*/
function log( value ) {
	if ( value instanceof Error ) {
		return console.error( value );
	}
	console.log( value );
}


// EXPORTS //

export default log;
