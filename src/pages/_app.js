import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SkeletonTheme } from 'react-loading-skeleton';
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<SkeletonTheme
				baseColor='#243140'
				highlightColor='#242032'
				borderRadius='0.1rem'
				duration={1}>
				<Component {...pageProps} />
			</SkeletonTheme>
		</Provider>
	);
}
