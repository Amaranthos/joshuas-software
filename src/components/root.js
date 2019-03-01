import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { App } from './app';
import { ConnectedThemer } from './themer';

export const Root = ({ store, history }) =>(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={<div />} persistor={persistStore(store)}>
				<ConnectedThemer>
					<App />
				</ConnectedThemer>
			</PersistGate>
		</BrowserRouter>
	</Provider>
);

export default Root;