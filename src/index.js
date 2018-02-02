import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { store, history } from './store';
import Root from './components/Root';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Root store={store} history={history} />, document.getElementById('root')
);
// registerServiceWorker();
