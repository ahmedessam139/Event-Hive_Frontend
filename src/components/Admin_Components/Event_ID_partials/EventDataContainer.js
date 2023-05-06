import Popup from 'reactjs-popup';
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import { FaTimes, } from "react-icons/fa";
import "reactjs-popup/dist/index.css";


function EventDataContainer({ eventData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [eventData_string, setEventData_string] = useState("");



    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        setEventData_string(JSON.stringify(eventData));
        console.log(eventData_string);
    }, []);



    return (
        <div className="container bg-white py-4 mt-4 rounded-lg shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {eventData.name}
                        </h1>
                        <div className="flex flex-col md:flex-row">
                            <div className="text-md text-gray-800 mr-4">
                                <span className="font-bold">
                                    Date:
                                </span>{" "}
                                {eventData.date}
                            </div>
                            <div className="text-md text-gray-800 mr-4">
                                <span className="font-bold">
                                    Time:
                                </span>{" "}
                                {eventData.time}
                            </div>
                            <div className="text-md text-gray-800 mr-4">
                                <span className="font-bold">
                                    Venue:
                                </span>{" "}
                                {eventData.venue}
                            </div>
                            <div className="text-md text-gray-800 mr-4">
                                <span className="font-bold">
                                    Organizer:
                                </span>{" "}
                                {eventData.organizer}
                            </div>
                        </div>
                    </div>

                    <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`} >

                        <li className="mx-2 my-6 md:my-0">
                            <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                                Update Event

                            </button>
                        </li>
                        <li className="mx-2 my-6 md:my-0">
                            <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                                Event Statistics

                            </button>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-gray-300 mt-8 mb-4"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Ticket Pricing starts from
                        </h3>
                        <p className="text-gray-800 text-lg">
                            {Math.min(...eventData.tickets.map(ticket => ticket.price))} EGP
                        </p>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        <button
                            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
                        >
                            Share
                        </button>
                    </div>
                </div>
            </div>

        </div>



    );
}
export default EventDataContainer;