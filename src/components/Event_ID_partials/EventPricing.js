function EventPricing({ eventData ,isUserRegistered}) {
    return (
        <div className="mb-4 bg-white px-6 py-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ticket Prices
            </h3>
            <ul className="text-gray-600">
                {eventData.ticketsTypes
                .map((item, index) => (
                    <li
                        className="flex items-center h-16 py-1 rounded-md p-4 mb-2 hover:shadow-md"
                        key={index}
                    >
                        <span className="w-1/3">
                            {item.type}
                        </span>
                        <span className="w-1/3 text-center">
                            ₹{item.price}
                        </span>
                        <button
                            onClick={() =>
                                router.push(
                                    `/event/${eventId}/payment`
                                )
                            }
                            className={`px-3 py-2 ${isUserRegistered
                                ? "bg-gray-700 hover:bg-gray-800"
                                : "bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)]"
                                } text-white rounded focus:outline-none`}
                            disabled={isUserRegistered}
                        >
                            {isUserRegistered
                                ? "Registered"
                                : "Buy Tickets"}
                        </button>
                    </li>
                ))}
            </ul>
            <p className="text-sm text-[color:var(--darker-secondary-color)] mt-6">
                *Caution: All ticket sales are final and
                non-refundable.
            </p>
        </div>
    );
}
export default EventPricing;