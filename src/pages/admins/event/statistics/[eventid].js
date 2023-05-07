import AdminNavBar from "../../../../components/Admin_Components/AdminNavBar";
import EventData from "../../../../components/Admin_Components/Statistics_page_partials/EventData";
import Counters from "../../../../components/Admin_Components/Statistics_page_partials/Counters";
import GenderChart from "../../../../components/Admin_Components/Statistics_page_partials/GenderChart";
import AttendeesTable from "../../../../components/Admin_Components/Statistics_page_partials/AttendeesTable";

import { useState, useEffect } from "react";
import axios from "axios";


const EventStatistics = () => {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/eventid_statistics`);
                if (response.status === 200) {
                    const data = await response.data;
                    console.log(data.genderPercentage);
                    setEventData(data);
                } else {
                    throw new Error("Failed to fetch event data");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, []);

    if (!eventData) return null;

    return (
        <div className="bg-[color:var(--primary-color)]">
            <AdminNavBar />
            <EventData eventData={eventData} />
            <Counters counters={eventData.Counters} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="col-span-1 md:col-span-2">
                {/**  Attndee Table */}
                <AttendeesTable attendees={eventData.attendees} />
                </div>
                <div className="col-span-1 md:col-span-1">
                {/** Gender Chart */}
                <GenderChart genderPercentage={eventData.genderPercentage} />
                </div>
            </div>


        </div>
    );
};

export default EventStatistics;

