/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './app.jsx';
import config from './config.js';


// MAIN //

/**
* Renders an application on the server.
*
* @private
* @returns {JSX} rendered component
*/
function ServerApp() {
	return (
		<StaticRouter location={ config.mount } context={ {} } >
			<App />
		</StaticRouter>
	);
}


// EXPORTS //

export default ServerApp;
