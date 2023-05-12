import "../styles/globals.css";
import "../styles/Home.css";
import LoadingComponent from "../components/LoadingComponent";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { setSessionToken } from "../utils/sessionStorage";

export default function App({ Component, pageProps }) {
    const [sessionLoaded, setSessionLoaded] = useState(false);

    useEffect(async () => {
        const session = await getSession();
        if (session) {
            console.log("session: ", session.user.token);
            setSessionToken(session.user.token);
        }
        setSessionLoaded(true);
    }, []);

    if (!sessionLoaded) {
        return <LoadingComponent />;
    }

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon_io/favicon.png" />
                <title>EventHive</title>
            </Head>
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}
