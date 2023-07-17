import AdminNavBar from "../../components/Admin_Components/AdminNavBar";
import Counters from "../../components/Admin_Components/AdminDashboard/Counters";
import UpcomingEvents from "../../components/Admin_Components/AdminDashboard/UpcomingEvents";
import PastEvents from "../../components/Admin_Components/AdminDashboard/PastEvents";
import Moderators from "../../components/Admin_Components/AdminDashboard/Moderators";

import LoadingComponent from "../../components/LoadingComponent";
import Footer from "../../components/FooterComponent";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


const Dashboard = () => {
    const [counters, setCounters] = useState({
        upcomingEvents: 30,
        pastEvents: 103,
        leftDaysforTheMembership: 356
    });
    const [upcomingEvents, setUpcomingEvents] = useState(
        [
            {
              "event_id": 1,
              "name": "هارلي",
              "venue": "Masria Plaza Hall",
              "date": "Every Friday",
              "ticketType": "General",
              "price": "49.99",
              "status": "Paid",
              "transactionId": "534sa35djkgfou"
            },
            {
              "event_id": 2,
              "name": "PopNation",
              "venue": "Barclays Center",
              "date": "2023-06-05",
              "ticketType": "VIP",
              "price": "29.99",
              "status": "Pending",
              "transactionId": "354563456dsf54"
            }
          ]

    );
    const [pastEvents, setPastEvents] = useState( [
        {
          "event_id": 1,
          "name": "dsdsds",
          "venue": "dsaddasd",
          "date": "2016-06-05",
          "ticketType": "General",
          "price": "49.99",
          "status": "Atended",
          "transactionId": "534sa35djkgfou"
        },
        {
          "event_id": 2,
          "name": "PopNation",
          "venue": "Barclays Center",
          "date": "2023-06-05",
          "ticketType": "VIP",
          "price": "29.99",
          "status": "Atended",
          "transactionId": "354563456dsf54"
        }
      ]);
    // const [moderators, setmoderators] = useState([]);

    const {status , data } = useSession();

   

    const dashboardData = async () => {
      //API call to get the data

    };

    const router = useRouter();

    useEffect(() => {
        dashboardData();
        
    }, [status]);


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
    
    if (counters.length === 0) {
        return <LoadingComponent />;
    }

    return (
        <>
            <div className="bg-[color:var(--primary-color)]">
                <AdminNavBar />

                <Counters Counters={counters} />
                <UpcomingEvents UpcomingEvents={upcomingEvents} />
                <PastEvents PastEvents={pastEvents} />
                {/* <Moderators moderators={moderators} /> */}

                <Footer />

            </div>
        </>
    );
};

export default Dashboard;
