import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { App } from './app';
import { lightTheme } from '../utilities/styling';

injectGlobal({
	'html, body, #root': {
		width: '100%',
		height: '100%',
		padding: 0,
		margin: 0
	},
});

const Root = ({ store, history }) => (
	<Provider store={store}>
		<PersistGate loading={<div />} persistor={persistStore(store)}>
 			<ConnectedRouter history={history}>
				<ThemeProvider theme={lightTheme}>
					<App />
				</ThemeProvider>
 			</ConnectedRouter>
 		</PersistGate>
 	</Provider>
);

export default Root;