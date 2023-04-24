function HeroHome() {
    return (
        <section className="">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
