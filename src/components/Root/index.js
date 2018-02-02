import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter as Router } from 'react-router-redux';

import App from '../App';

const Root = ({ store, history }) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<Router history={history}>
				<App />
			</Router>
		</PersistGate>
	</Provider>
);

export default Root;