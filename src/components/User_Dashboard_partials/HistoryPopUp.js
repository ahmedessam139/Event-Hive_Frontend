import React, { useState } from 'react';
import { TextField } from '@mui/material';


function HistoryPopUp({ PastEvents }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredEvents = PastEvents.filter(event => {
        return event.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <div className="bg-white p-4 m-8 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                    <p className="mb-2 text-3xl text-gray-500">History</p>
                    <div className="flex justify-end p-2">
                        <TextField label="Search Events" sx={TextFieldStyle} variant="outlined" type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by Event Name" />
                    </div>
                </div>

                <div className="bg-white shadow-md rounded my-6 overflow-x-auto">

                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Event</th>
                                <th className="py-3 px-6 text-left">Venue</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Ticket Type</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {filteredEvents.map((event) => (
                                <tr key={event.event_id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{event.name}</td>
                                    <td className="py-3 px-6 text-left">{event.venue}</td>
                                    <td className="py-3 px-6 text-left">{event.date}</td>
                                    <td className="py-3 px-6 text-left">{event.ticketType}</td>
                                    <td className="py-3 px-6 text-left">{event.price}</td>
                                    <td className="py-3 px-6 text-left">{event.status}</td>
                                    <td className="py-3 px-6 text-left">{event.transactionId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
const TextFieldStyle =
{
    "& .MuiOutlinedInput-root": {

        "&.Mui-focused fieldset": { borderColor: "var(--darker-secondary-color)" },
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
        color: "var(--gray-color  )"
    }
}

export default HistoryPopUp;
