/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';


// MAIN //

/**
* Renders a client application.
*
* @private
* @returns {JSX} rendered component
*/
function ClientApp() {
	return (
		<BrowserRouter onUpdate={ () => window.scrollTo( 0, 0 ) } >
			<App />
		</BrowserRouter>
	);
}


// EXPORTS //

export default ClientApp;
