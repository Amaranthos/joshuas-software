import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { App } from './app';
import { ConnectedThemer } from './themer';

const Root = ({ store, history }) => (
	<Provider store={store}>
		<PersistGate loading={<div />} persistor={persistStore(store)}>
 			<ConnectedRouter history={history}>
				<ConnectedThemer>
					<App />
				</ConnectedThemer>
 			</ConnectedRouter>
 		</PersistGate>
 	</Provider>
);

export default Root;