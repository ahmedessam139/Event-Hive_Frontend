function EventDataContainer({eventData ,isUserRegistered , share}) {
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
                    <div className="text-left lg:text-right mt-4 lg:mt-0">
                        <button
                            onClick={() =>
                                router.push(
                                    `/event/${eventId}/payment`
                                )
                            }
                            className={`px-6 py-2 ${isUserRegistered
                                ? "bg-gray-700 hover:bg-gray-800"
                                : "bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)]"
                                } text-white rounded focus:outline-none`}
                            disabled={isUserRegistered}
                        >
                            {isUserRegistered
                                ? "Already Registered"
                                : "Buy Tickets"}
                        </button>
                    </div>
                </div>
                <div className="border-b border-gray-300 mt-8 mb-4"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Ticket Pricing
                        </h3>
                        <p className="text-gray-800">
                            ₹{eventData.price}
                        </p>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        <button
                            onClick={share}
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