import UserDropdown from "@/components/UserDropdown";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//add FaSignInAlt and FaKey
import { FaSignInAlt, FaKey } from "react-icons/fa";

export default function NavBar() {
    const router = useRouter();

    const [singedIn, setSignedIn] = useState(false);
    const [userData, setUserData] = useState({});

    //set signedIn to false

    // fetch the user data as soon as the page loads
    
    
    if (!singedIn) {
        return (
            <nav className="bg-white border-color:var(--light-gray) light:bg--primary-color">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
                <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
                  <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 mr-4 ml-3 text-sm text-color:var(--lighter-gray) rounded-lg md:hidden hover:bg-color:var(--lighter-gray) focus:outline-none focus:ring-2 focus:ring-color:var(--lighter-gray) light:text-color:var(--lighter-gray) light:hover:bg-color:var(--lighter-gray) light:focus:ring-color:var(--lighter-gray)" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-color:var(--lighter-gray) rounded-lg bg-[color:var(--light-gray)] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-[color:var(--light-gray)] md:light:bg-[color:var(--light-gray)] light:border[-color:var(--light-gray)]">
                    <li>
                      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div>
                          <a href="/auth/signin" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                            Signin
                            <FaSignInAlt/>
                          </a>
                        </div>
                        <div>
                          <a href="/auth/signup" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4">
                            Signup
                            <FaKey/>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );

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
