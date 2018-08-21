import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';

const Root = ({ store, history }) =>
(
	<Provider store={store}>
		<PersistGate loading={<div />} persistor={persistStore(store)}>
 			<ConnectedRouter history={history}>
				<App />
 			</ConnectedRouter>
 		</PersistGate>
 	</Provider>
);

export default Root;