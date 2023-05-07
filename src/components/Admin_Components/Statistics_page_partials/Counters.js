import { useEffect } from "react";

const Counters = ({ counters }) => {


   

    if (!counters) return null;

    return (
        <div className="bg-white p-4 mt-4 rounded-lg shadow-md  md:mx-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-lg">
                    <div className="p-4">
                        <h4 className="text-lg font-medium mb-2">
                            Sold Tickets
                            <i className="mdi mdi-ticket mdi-24px float-right"></i>
                        </h4>
                        <h2 className="text-4xl font-bold">{counters.soldTickets}</h2>
                        <h6 className="text-xs font-medium">
                            {counters.soldTickets} out of {counters.totalTickets} tickets have been sold so far
                        </h6>
                    </div>
                </div>
                <div className="col-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg">
                    <div className="p-4">
                        <h4 className="text-lg font-medium mb-2">
                            Revenue
                            <i className="mdi mdi-currency-usd mdi-24px float-right"></i>
                        </h4>
                        <h2 className="text-4xl font-bold">${counters.revenue}</h2>
                        <h6 className="text-xs font-medium">
                            Total revenue generated from ticket sales
                        </h6>
                    </div>
                </div>
                <div className="col-span-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg">
                    <div className="p-4">
                        <h4 className="text-lg font-medium mb-2">
                            Check-In
                            <i className="mdi mdi-account-check mdi-24px float-right"></i>
                        </h4>
                        <h2 className="text-4xl font-bold">{counters.checkedIn}</h2>
                        <h6 className="text-xs font-medium">
                            {counters.checkedIn} attendees have checked in so far
                        </h6>
                    </div>
                </div>
                <div className="col-span-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow-lg">
                    <div className="p-4">
                        <h4 className="text-lg font-medium mb-2">
                            Gate Staff
                            <i className="mdi mdi-account-group-outline mdi-24px float-right"></i>
                        </h4>
                        <h2 className="text-4xl font-bold">{counters.gateStaff}</h2>
                        <h6 className="text-xs font-medium">
                            {counters.gateStaff} people are the moderators of this event
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counters;
