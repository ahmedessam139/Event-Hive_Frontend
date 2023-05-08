import { useState } from "react";
import { FaSignInAlt, FaKey, FaUser, FaSignOutAlt, FaCog, FaEnvelope, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { IoMenu } from "react-icons/io5";
import { FaRegCalendarAlt, FaPlus } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const { status, data } = useSession();

  const [singedIn, setSignedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  if (status === "loading") return null;

  if (status != "authenticated") {
    return (
      <nav className="p-3 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
            <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
          </div>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            <IoMenu />
          </span>
        </div>

        <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${isMenuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`} >
          

          <li className="mx-2 my-6 md:my-0">
            <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/auth/signin")}>
              Signin
              <FaSignInAlt />
            </button>
          </li>
          <li className="mx-2 my-6 md:my-0">
            <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => router.push("/auth/signup")}>
              Signup
              <FaKey />
            </button>
          </li>


        </ul>
      </nav>

    );

  }
  if (status === "authenticated") {
    return (
      <nav className="p-3 bg-white shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
                    <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
                </div>

                <span
                    className="text-3xl cursor-pointer mx-2 md:hidden block"
                    onClick={toggleMenu}
                >
                    <IoMenu />
                </span>
            </div>

            <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 py-2 md:opacity-100 ${isMenuOpen ? 'opacity-100 z-10 right' : 'opacity-100 top-[-400px]'}  `} >                
                <li className="mx-2 my-6 md:my-0" onClick={() => router.push("/users/profile")}>
                    <a href="#" className="text text-gray-600  hover:text-[color:var(--secondary-color)] duration-500 flex justify-center items-center">
                        Update Profile
                        <FaCog className='mt-1 ml-1'/>
                    </a>
                </li>
                
                <li className=" my-2 md:my-0">
                    <button type="button" className="btn text-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/users/dashboard")}>
                        Dashboard
                        <FaUser />
                    </button>
                </li>
                <li className="mr-2 my-2 md:my-0 bg-white">
                <button type="button" className="btn text-sm text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => signOut()}>
                    Signout
                    <FaSignOutAlt />
                </button>
                </li>

               
            </ul>
        </nav>   
    );

  }

}
