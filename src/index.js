import React from 'react';
import ReactDOM from 'react-dom';

import { store, history } from './utilities/store';
import Root from './components/root';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Root store={store} history={history} />, document.getElementById('root')
);
// registerServiceWorker();

store.dispatch({ type: 'FAKER_REQUESTED' });