// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// react router dom
import { BrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store, { persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
// chakra UI
import { ColorModeScript } from '@chakra-ui/react';
// locales
import './i18n';
// components
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<ColorModeScript />
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

