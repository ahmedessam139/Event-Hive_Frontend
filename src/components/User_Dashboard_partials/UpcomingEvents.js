

const UpcomingEvents = () => {

    return (
        <div className=" bg-white p-4 m-8 rounded-lg shadow-md ">
            <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
                <div className="flex justify-between mb-2">
                    <p className="mb-2 text-3xl text-gray-500">
                        Upcoming Events
                    </p>
                    <button className="bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-4 rounded-full">
                        See More
                    </button>
                </div>
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Event</th>
                            <th className="py-3 px-6 text-left">Venue</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">status</th>
                            <th className="py-3 px-6 text-left">price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                    </div>
                                    <span>David Grey</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span>Fund is not received</span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">DONE</span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span>Dec 5, 2017</span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span>WD-12345</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>


    );
};

export default UpcomingEvents;