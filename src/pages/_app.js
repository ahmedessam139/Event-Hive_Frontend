import "../styles/globals.css";
import "../styles/Home.css";
import LoadingComponent from "../components/LoadingComponent";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { setSessionToken } from "../utils/sessionStorage";
import { useRouter } from "next/router";


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

    const router = useRouter();
    const isSignInPage = router.pathname === "/auth/signin";

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
                {!isSignInPage && (
                    <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
                        <p>This site is in the development phase. You can explore it without registration or data collection, just SignIn ✌️</p>
                    </div>
                )}
            </SessionProvider>
        </>
    );
}
