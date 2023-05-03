import React from 'react';
import { FaCheck } from "react-icons/fa";

function FeaturesZigzag({ images }) {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <br />
                <div className="py-12 md:py-20 border-t border-gray-800">
                    <br />
                    <br />
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">
                        Endless solutions, one platform.
                        </h1>
                        <p className="text-xl text-gray-500">
                        "Simplify your workload with our all-encompassing platform."
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="text-xl text-[color:var(--darker-secondary-color)] mb-2">
                                        More speed. High efficiency
                                    </div>
                                    <h3 className="h3 mb-3">
                                        Keep events on schedule
                                    </h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                    EventHive is a comprehensive event management platform that allows organizers to efficiently manage and sell tickets for their events. With EventHive, organizers can easily customize ticket types, set pricing, and create discount codes to incentivize early ticket purchases. The platform also provides real-time reports that track ticket sales and revenue, enabling organizers to make informed decisions regarding marketing and event planning strategies. Additionally, EventHive allows organizers to communicate directly with attendees, providing updates and information about the event. With its user-friendly interface and powerful features, EventHive is the go-to solution for organizers looking to streamline their event ticketing and management processes.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            EventHive provides a personalized dashboard for organizers
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Organizers can fill in event details and schedule events through the platform
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Secure and quick access is ensured for both organizers and attendees
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Real-time reports and analytics help organizers track ticket sales and revenue
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            The platform allows for easy communication with attendees and provides updates and information about the event.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="text-xl text-[color:var(--darker-secondary-color)] mb-2">
                                        Super easy. Quick booking
                                    </div>
                                    <h3 className="h3 mb-3">
                                        Book your favourite shows
                                    </h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                    EventHive is a user-friendly event management platform that offers a seamless ticket purchasing experience for attendees. With EventHive, attendees can easily browse upcoming events, select their preferred tickets, and make their purchase securely and quickly. The platform offers customizable ticket types and pricing, enabling attendees to find the best option for their needs and budget. Additionally, EventHive provides real-time updates about ticket availability and pricing, helping attendees make informed decisions about when to purchase their tickets. The platform also offers easy communication with event organizers, allowing attendees to get updates and information about the event. Overall, EventHive simplifies the ticket purchasing process for attendees, providing a hassle-free and enjoyable experience.                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Easy and convenient online ticket generation for events, making it quick and hassle-free to secure a spot at the event.
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Secure online payment options for tickets, ensuring a seamless and secure transaction process.
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Access to real-time updates and information about the event, such as event location, schedule, and speaker lineup</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            The platform allows for easy communication with attendees and provides updates and information about the event.
                                            </span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesZigzag;