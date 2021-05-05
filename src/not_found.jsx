/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React, { Fragment } from 'react';


// MAIN //

/**
* Renders a component for when a resource is not found.
*
* @private
* @param {Object} props - component properties
* @returns {JSX} rendered component
*/
function NotFound() {
	return (
		<Fragment>
			<div id="readme" className="readme">
				<section>
					<h1>Whoops!</h1>
					<p>
						Oh no! We're having trouble locating that page. 😢
					</p>
				</section>
			</div>
		</Fragment>
	);
};


// EXPORTS //

export default NotFound;
