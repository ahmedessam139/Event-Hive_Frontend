import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
    const router = useRouter();
    
  return (
    
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 bg-[color:var(--lighter-gray)]">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
            <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
          </div>
            

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <div className="text-gray-500 cursor-pointer mt-2 sm:mt-0">
              <a href="mailto:eventhive@gmail.com">
                <AiOutlineMail className="inline-block" />
              </a>
              <span className="ml-1 text-sm">Contact Us</span>
            </div>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">EVENTHIVE</span>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;
