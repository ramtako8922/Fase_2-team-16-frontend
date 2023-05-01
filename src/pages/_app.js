import '@/styles/globals.css';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
