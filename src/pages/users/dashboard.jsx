import UserNavBar from "../../components/UserNavBar";
import Counters from "../../components/User_Dashboard_partials/Counters";
import UpcomingEvents from "../../components/User_Dashboard_partials/UpcomingEvents";
import PastEvents from "../../components/User_Dashboard_partials/PastEvents";
import LoadingComponent from "../../components/LoadingComponent";
import Footer from "../../components/FooterComponent";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaCog } from "react-icons/fa";
const Dashboard = () => {
    const [counters, setCounters] = useState({
        "upcomingEvents": 10,
        "joinedEvents": 20,
        "membershipSince": "4 Years"
      });
    const [upcomingEvents, setUpcomingEvents] = useState([
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
      ]);
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



    const dashboardData = async () => {
       //Put your API call here

    };

    useEffect(() => {
        dashboardData();
    }, []);

    const { status, data } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            if (data.user.role === "user") {
                return;
            } else {
                router.push("/auth/signin");
            }
        }
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }

    }, [status]);


    if (status === "unauthenticated" || status === "Loading") {

        return (
            <LoadingComponent />
        )
    }

    return (
        <>
            <div className="bg-[color:var(--primary-color)]">
                <UserNavBar />

                <Counters Counters={counters} />
                <UpcomingEvents UpcomingEvents={upcomingEvents} />
                <PastEvents PastEvents={pastEvents} />
                <div className=" mt-4 flex justify-center">
                    <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)]" onClick={() => router.push("/users/profile")}>
                        Update Profile
                        <FaCog className="ml-1" />
                    </button>
                </div>
                <Footer />

            </div>
        </>
    );
};

export default Dashboard;
