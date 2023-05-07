import { useState } from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';
import IoPeople from 'react-icons/io5';

const AttendeesTable = () => {
    const [attendies, setAttendies] = useState([
        {
            id: 1,
            username: 'john_doe',
            name: 'John Doe',
            tickets: 2,
            status: 'pending',
            attendieId: '345343531',
            created_at: '2023-05-01/10:30:00',
        },
        {
            id: 2,
            username: 'jane_smith',
            name: 'Jane Smith',
            tickets: 3,
            status: 'paid',
            attendieId: '35245634534',
            created_at: '2023-05-02/12:45:00',
        },
        {
            id: 3,
            username: 'bob_johnson',
            name: 'Bob Johnson',
            tickets: 1,
            status: 'attended',
            attendieId: '2536654564',
            created_at: '2023-05-03/14:20:00',
        }, {
            id: 3,
            username: 'bob_johnson',
            name: 'Bob Johnson',
            tickets: 1,
            status: 'attended',
            attendieId: '545645486653',
            created_at: '2023-05-03/14:20:00',
        },
    ]);

    const handleTransactionClick = (attendieId) => {
        // do something when attendie id is clicked
    };

    return (
        <div className="bg-white p-4 m-2 md:m-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
                <p className="mb-2 text-3xl text-gray-500">Attendees</p>
                <button
                    className="bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-4 rounded-full"
                >
                    See All...
                </button>
            </div>

            <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">Username</th>
                            <th className="py-3 px-6 text-center">Name</th>
                            <th className="py-3 px-6 text-center">No. of Tickets</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-center">Transaction ID</th>
                            <th className="py-3 px-6 text-center">Created At</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-600 text-sm font-light">
                        {attendies.slice(0, 5).map((attendie) => (
                            <tr key={attendie.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-center">{attendie.username}</td>
                                <td className="py-3 px-6 text-center">{attendie.name}</td>
                                <td className="py-3 px-6 text-center">{attendie.tickets}</td>
                                <td className="py-3 px-6 text-center">
                                    {attendie.status === 'pending' && (
                                        <div className="flex items-center ">
                                            <FaCircle size={16} className="text-yellow-500 mr-2" />
                                            <span className="text-yellow-500 font-bold text-center">Pending</span>
                                        </div>
                                    )}
                                    {attendie.status === 'paid' && (
                                        <div className="flex items-center ">
                                            <FaCheckCircle size={16} className="text-green-500 mr-2" />
                                            <span className="text-green-500 font-bold text-center">Paid</span>
                                        </div>
                                    )}
                                    {attendie.status === 'attended' && (
                                        <div className="flex items-center r">
                                            <FaCheckCircle size={16} className="text-blue-500 mr-1" />
                                            <span className="text-blue-500 font-semibold text-center">Attended</span>
                                        </div>
                                    )}
                                </td>
                                <td
                                    className="py-3 px-6 text-center cursor-pointer "
                                    onClick={() => handleTransactionClick(attendie.attendieId)}
                                >
                                    <span className="text-gray-500 font-semibold text-center">{attendie.attendieId}</span>
                                </td>
                                <td className="py-3 px-6 text-center cursor-pointer ">
                                    <span className="mr-1 text-center">{attendie.created_at}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AttendeesTable;