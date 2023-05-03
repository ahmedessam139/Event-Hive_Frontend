import Header from "./Header";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import LoadingComponent from "../LoadingComponent";

function HeroHome() {
    const { status, data } = useSession();

    if(status == "loading"){
        return <LoadingComponent />
    }
    return (
        <section className="">
            <Header />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Hero content */}
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <img

                            src="/favicon_io/eventhive-logo.svg"
                            width={2000}
                            height={400}
                            alt="Logo"

                        />
                        <br />

                        <p className="mt-3 text-5xl text-gray-500">
                            {"Event Management System"}
                        </p>
                        <br />
                        <p className="text-2xl text-gray-500 mb-8">
                            "Revolutionize Your Events: Streamlined Registration, Effortless Management, and Seamless Ticketing."
                        </p>

                        {status != "authenticated" && (
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div>
                                    <a
                                        href="/auth/signin"
                                        className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
                                    >
                                        Signin
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                        href="/auth/signup"
                                    >
                                        Signup
                                    </a>
                                </div>
                            </div>)}
                        {status == "authenticated" && (
                            <div className="hidden md:block">
                                <span className="mr-4">Hello, {data.user.username}!</span>

                                <button type="button" className="btn text-white bg-gradient-to-l from-[color:var(--darker-secondary-color)] to-gray-700 hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => signOut()}>
                                    Signout

                                </button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );




}

export default HeroHome;
