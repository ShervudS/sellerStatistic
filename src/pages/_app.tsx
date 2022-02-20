import Head from 'next/head';

import { Provider } from 'react-redux';
import store from '../redux/store/store';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Seller Statistic</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;
