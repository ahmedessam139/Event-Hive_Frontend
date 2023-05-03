import UserNavBar from "../../components/UserNavBar";
import Counters from "../../components/User_Dashboard_partials/Counters";
import UpcomingEvents from "../../components/User_Dashboard_partials/UpcomingEvents";
import PastEvents from "../../components/User_Dashboard_partials/PastEvents";
import LoadingComponent from "../../components/LoadingComponent";
import Footer from "../../components/FooterComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaCog } from "react-icons/fa";
const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [counters, setCounters] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const { status, data } = useSession();


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
            setLoading(false); // set loading to false when data is fetched
        } catch (error) {
            console.log(error);

        }

    };

    const router = useRouter();

    useEffect(() => {
        dashboardData();
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [status]);

    if (loading || status != "authenticated") {
        return <LoadingComponent />;
    }
    return (
        <>
            <div className="bg-[color:var(--primary-color)]">
                <UserNavBar />

                <Counters Counters={counters} />
                <UpcomingEvents UpcomingEvents={upcomingEvents} />
                <PastEvents PastEvents={pastEvents} />
                <div className="flex justify-center">
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
