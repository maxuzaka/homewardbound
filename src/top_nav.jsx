/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React, { Fragment } from 'react';


// FUNCTIONS //

/**
* Returns a React component for navigating to the main website.
*
* @private
* @returns {ReactComponent} React component
*/
function home() {
	return (
		<li class="top-nav-item"><a href="/" title="Go to the main website">home</a></li>
	);
}


// MAIN //

/**
* Component for rendering top navigation.
*
* @private
*/
class TopNav extends React.Component {
	/**
	* Returns a component for rendering top navigation.
	*
	* @constructor
	* @param {Object} props - component properties
	* @param {boolean} [props.home] - boolean indicating whether to link to the main website
	* @returns {ReactComponent} component
	*/
	constructor( props ) {
		super( props );
		this.state = {}
	}

	/**
	* Renders a component.
	*
	* @returns {JSX} rendered component
	*/
	render() {
		return (
			<Fragment>
				<nav
					className={ 'top-nav' }
					aria-label="Main"
				>

				</nav>
			</Fragment>
		);
	}
}


// EXPORTS //

export default TopNav;
