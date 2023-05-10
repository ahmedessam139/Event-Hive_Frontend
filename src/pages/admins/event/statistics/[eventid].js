import AdminNavBar from "../../../../components/Admin_Components/AdminNavBar";
import EventData from "../../../../components/Admin_Components/Statistics_page_partials/EventData";
import Counters from "../../../../components/Admin_Components/Statistics_page_partials/Counters";
import GenderChart from "../../../../components/Admin_Components/Statistics_page_partials/GenderChart";
import ModeratorsTable from "../../../../components/Admin_Components/Statistics_page_partials/ModeratorsTable";
import AttendeesTable from "../../../../components/Admin_Components/Statistics_page_partials/AttendeesTable";
import TicketsChart from "../../../../components/Admin_Components/Statistics_page_partials/TicketsChart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";



const EventStatistics = () => {

    const [eventData, setEventData] = useState([]);

    const router = useRouter();


    const eventId = router.query.eventId;


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/eventid_statistics`);
                if (response.status === 200) {
                    const data = await response.data;
                    console.log(data.ticketsData.Total[0]);
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
                    <TicketsChart ticketsData={eventData.ticketsData} />
                </div>
                <div className="col-span-1 md:col-span-1">
                    <GenderChart genderPercentage={eventData.genderPercentage} />
                </div>
            </div>
            <AttendeesTable />
            <ModeratorsTable />
        </div>
    );
};

export default EventStatistics;

