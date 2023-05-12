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
    const [counters, setCounters] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);



    const dashboardData = async () => {
        try {
            const res = await axios.get("http://localhost:3001/dashboard");
            console.log(res.data);
            console.log(res.data.Counters);
            console.log(res.data.UpcomingEvents);
            console.log(res.data.PastEvents);
            setCounters(res.data.Counters);
            setUpcomingEvents(res.data.UpcomingEvents);
            setPastEvents(res.data.PastEvents);
        } catch (error) {
            console.log(error);

        }

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
