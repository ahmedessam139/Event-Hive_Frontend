import AdminNavBar from "../../../../components/Admin_Components/AdminNavBar";
import EventData from "../../../../components/Admin_Components/Statistics_page_partials/EventData";
import Counters from "../../../../components/Admin_Components/Statistics_page_partials/Counters";
import GenderChart from "../../../../components/Admin_Components/Statistics_page_partials/GenderChart";
import ModeratorsTable from "../../../../components/Admin_Components/Statistics_page_partials/ModeratorsTable";
import AttendeesTable from "../../../../components/Admin_Components/Statistics_page_partials/AttendeesTable";
import TicketsChart from "../../../../components/Admin_Components/Statistics_page_partials/TicketsChart";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "../../../../utils/axios";



const EventStatistics = () => {

    const [eventData, setEventData] = useState({
    
        "name": "Example Event",
        "cover": "https://www.dostor.org/Upload/libfiles/406/2/253.jpg",
        "date": "2023-05-01",
        "description": "هارلي هو حفل موسيقي يقام كل جمعة في مصريا بلازا هول",
        "time": "10:00 AM",
        "venue": "123 Main St, Anytown USA",
        "organizer": "Example Organizer",
        "Counters" : {
          "totalTickets": 150,
          "soldTickets": 100,
          "revenue": 10000,
          "checkedIn": 0,
          "gateStaff": 5
        },
        "genderPercentage":{
          "Total":20,
          "General": 10,
          "VIP": 40,
          "VVIP": 50
        },
        "ticketsData":{
          "Total":[100,120],
          "General": [10,20],
          "VIP": [40,50],
          "VVIP": [50,50]
        },
        "tickets": [
          {
            "type": "General",
            "price": 100,
            "Available": true,
            "Seated": true,
            "seats": {
              "A": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              "B": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
              "C": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
              "D": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
              "E": [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3]
            }
          },
          {
            "type": "VIP",
            "price": 200,
            "Available": false,
            "Seated": true,
            "seats": {
              "A": [0, 0, 0],
              "B": [0, 0, 0],
              "C": [0, 0, 0],
              "D": [0, 0, 0]
            }
          },
          {
            "type": "VVIP",
            "price": 500,
            "Available": true,
            "Seated": false,
            "seats": {}
          }
        ],
        "attendees": [
            {
              "username": "user1",
              "name": "John Doe",
              "ticketType": "General",
              "status": "pending",
              "createdat": "2023-05-01"
            },
            {
              "username": "user2",
              "name": "Jane Doe",
              "ticketType": "VIP",
              "status": "pending",
              "createdat": "2023-05-01"
            },
            {
              "username": "user3",
              "name": "John Doe",
              "ticketType": "VVIP",
              "status": "pending",
              "createdat": "2023-05-01"
            }
          ]
      });

    const router = useRouter();


    const eventId = router.query.eventid;


    useEffect(() => {
      //API call to get event data

    }, []);

    const { status, data } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            if (data.user.role === "admin") {
                return;
            } else {
                router.push("/auth/signin");
            }
        }
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }

    }, [status]);


    // Check if the user exists and is not authenticated
    if (status === "unauthenticated" || (status === "authenticated" && !data)) {
        return <LoadingComponent />;
    }

    // Check if the user exists and is not an admin
    if (status === "authenticated" && data && data.user.role !== "admin") {
        return <LoadingComponent />;
    }


    if (!eventData) return <LoadingComponent />;

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
            <AttendeesTable att={eventData.attendees}/>
            {/* <ModeratorsTable /> */}
        </div>
    );
};

export default EventStatistics;

