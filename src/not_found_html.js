/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MAIN //

/**
* Returns an HTML string for when a resource is not found.
*
* @private
* @param {Object} props - component properties
* @returns {string} HTML string
*/
function NotFound() {
	return [
		'<div id="readme" class="readme">',
		'<section>',
		'<h1>Whoops!</h1>',
		'<p>',
		'Oh no! We\'re having trouble locating that page. 😢',
		'</p>',
		'</section>',
		'</div>'
	].join( '\n' );
};


// EXPORTS //

export default NotFound;
