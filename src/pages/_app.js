import "@/styles/globals.css";
import "@/styles/Home.css";
import Head from "next/head";
import { Provider } from 'react-redux';
import store from "../store/index";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon_io/favicon.png" />
                <title>EventHive</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
