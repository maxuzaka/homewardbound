/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React, { Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import NotFound from './not_found.jsx';
import notFoundHTML from './not_found_html.js';
import Footer from './footer.jsx';
import TopNav from './top_nav.jsx';
import log from './log.js';
import config from './config.js';


// MAIN //

/**
* Component for rendering the main application.
*
* @private
*/
class App extends React.Component {
	/**
	* Returns a component which renders the main application.
	*
	* @constructor
	* @param {Object} props - component properties
	* @param {Object} props.history - history object for navigation
	* @returns {ReactComponent} component
	*/
	constructor( props ) {
		// Register component properties:
		super( props );

		// Set the initial component state:
		this.state = {};
	}

	/**
	* Renders a component.
	*
	* @returns {JSX} rendered component
	*/
	render() {
		// TODO
	}
}


// EXPORTS //

export default withRouter( App );
