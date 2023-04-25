import UserDropdown from "@/components/UserDropdown";
import { getUserToken } from "@/utils/getUserToken";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
    const router = useRouter();

    const userIdCookie = getUserToken();
    const [singedIn, setSignedIn] = useState(false);
    const [userData, setUserData] = useState({});

    // fetch the user data as soon as the page loads
    const fetchUserData = async () => {
        // If cookie was manually removed from browser
        if (!userIdCookie) {
            console.error("No cookie found! Please signin");
        }
        else {
            setSignedIn(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user/details`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_token: userIdCookie,
                    }),
                }
            );
            if (!response.ok)
                throw new Error(`${response.status} ${response.statusText}`);

            // User Details fetched from API `/user/details`
            try {
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Invalid JSON string:", error.message);
            }
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);


    if (!singedIn) {
        return (

            <nav class="bg-white border-gray-200 light:bg--primary-color">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
                    <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
                        <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 mr-4 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
                            <li>
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
                                    className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4"
                                    href="/auth/signup"
                                >
                                    Signup
                                </a>
                            </div>
                        </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        )

    } else {
        return (
            <div className="mb-[8vh]">
                <header className="bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--lighter-secondary-color)]">
                    <div className="container mx-auto flex items-center flex-col lg:flex-row justify-between p-4">
                        <div
                            onClick={() => router.push("/")}
                            className="flex items-center gap-x-3 cursor-pointer"
                        >
                            <img
                                src="/favicon_io/eventhive-logo.svg"
                                width={170}
                                height={70}
                                alt="Logo"
                            />

                        </div>
                        <nav className="text-sm">
                            <ul className="flex items-center">
                                <li
                                    onClick={() => router.push("/users/dashboard")}
                                    className="mr-4 cursor-pointer"
                                >
                                    <a>Dashboard</a>
                                </li>
                                <li
                                    onClick={() =>
                                        router.push("/users/past_events")
                                    }
                                    className="mr-4 cursor-pointer"
                                >
                                    <a>Past Events</a>
                                </li>
                                <li
                                    onClick={() => router.push("/")}
                                    className="mr-4 cursor-pointer"
                                >
                                    <a>About us</a>
                                </li>
                                <UserDropdown userData={userData} />
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
