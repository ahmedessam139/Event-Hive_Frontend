import AdminNavBar from "../../components/Admin_Components/AdminNavBar";
import Counters from "../../components/Admin_Components/AdminDashboard/Counters";
import UpcomingEvents from "../../components/Admin_Components/AdminDashboard/UpcomingEvents";
import PastEvents from "../../components/Admin_Components/AdminDashboard/PastEvents";
import Moderators from "../../components/Admin_Components/AdminDashboard/Moderators";

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
    const [moderators, setmoderators] = useState([]);

    const { status, data } = useSession();


    const dashboardData = async () => {
        try {
            const res = await axios.get("http://localhost:3001/AdminDashboard");
            console.log(res.data);
            console.log(res.data.Counters);
            console.log(res.data.UpcomingEvents);
            console.log(res.data.PastEvents);
            setCounters(res.data.Counters);
            setUpcomingEvents(res.data.UpcomingEvents);
            setPastEvents(res.data.PastEvents);
            setmoderators(res.data.Moderators)
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
                <AdminNavBar />

                <Counters Counters={counters} />
                <UpcomingEvents UpcomingEvents={upcomingEvents} />
                <PastEvents PastEvents={pastEvents} />
                <Moderators moderators={moderators} />

                <Footer />

            </div>
        </>
    );
};

export default Dashboard;
