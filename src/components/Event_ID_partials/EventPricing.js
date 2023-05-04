import { FaExclamationTriangle } from "react-icons/fa";

function EventPricing({ eventData }) {
    return (
        <div className="mb-4 bg-white px-6 py-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ticket Prices
            </h3>
            <ul className="text-gray-600">
                {eventData.tickets.map((item, index) => {
                    console.log(item);
                    if (item.Available) {
                        return (
                            <li
                                key={index}
                                className="flex justify-between items-center h-16 py-1 rounded-md p-4 mb-2 hover:shadow-md"
                            >
                                <span className="flex-1">{item.type}</span>
                                <span className="text-center">{item.price} EGP</span>
                            </li>
                        );
                    } else {
                        return (
                            <li
                                key={index}
                                className="flex justify-between items-center h-16 py-1 rounded-md p-4 mb-2 hover:shadow-md"
                            >
                                <span className="flex-1">{item.type} </span>
                                <span className="text-center text-bold text-2xl text-[color:var(--darker-secondary-color)]">[Sold Out]</span>
                            </li>
                        );
                    }
                })}
            </ul>

            <span className="text-sm text-[color:var(--darker-secondary-color)] mt-6 flex">
                <FaExclamationTriangle />
                Caution: All ticket sales are final and non-refundable.
            </span>
        </div>
    );
}
export default EventPricing;