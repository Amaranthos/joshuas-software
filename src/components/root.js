import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import ReactGA from 'react-ga';

import { App } from './app';

ReactGA.initialize('UA-124565553-1');

const updateGA = () => {
	ReactGA.pageview(window.location.hash);
}

const Root = ({ store, history }) => (
	<Provider store={store}>
		<PersistGate loading={<div />} persistor={persistStore(store)}>
 			<ConnectedRouter onUpdate={updateGA} history={history}>
				<App />
 			</ConnectedRouter>
 		</PersistGate>
 	</Provider>
);

export default Root;