import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { FaUser, FaSignOutAlt, FaCog ,FaPlus, FaMinus,FaRegCalendarAlt } from 'react-icons/fa';

function AdminNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                    <a href="#" className="text-xl text-gray-600 hover:text-[color:var(--secondary-color)] duration-500 flex">
                        My Events
                        <FaRegCalendarAlt className='mt-1 ml-1'/>
                    </a>
                </li>
                <li className="mx-2 my-6 md:my-0">
                    <a href="#" className="text-xl text-gray-600 hover:text-[color:var(--secondary-color)] duration-500 flex">
                        Create Event
                        <FaPlus className='mt-1 ml-1'/>
                    </a>
                </li>

                <li className="mx-2 my-6 md:my-0">
                    <a href="#" className="text-xl text-gray-600  hover:text-[color:var(--secondary-color)] duration-500 flex">
                        Update Profile
                        <FaCog className='mt-1 ml-1'/>
                    </a>
                </li>
                
                <li className="mx-2 my-6 md:my-0">
                    <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/users/dashboard")}>
                        Dashboard
                        <FaUser />
                    </button>
                </li>
                <li className="mx-2 my-6 md:my-0">
                    <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => signOut()}>
                        Signout
                        <FaSignOutAlt />
                    </button>
                </li>

               
            </ul>
        </nav>
    );
}

export default AdminNavBar;
