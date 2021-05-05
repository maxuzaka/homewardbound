/**
* Copyright (c) 2021 The Homeward Bound Authors.
*/

// MODULES //

import React from 'react';
import ReactDOM from 'react-dom';
import App from './client.jsx';
import * as serviceWorker from './service_worker.js';


// MAIN //

ReactDOM.hydrate( <App />, document.getElementById( 'root' ) );

serviceWorker.register();
