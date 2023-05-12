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


const Dashboard = () => {
    const [counters, setCounters] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [moderators, setmoderators] = useState([]);

    const {status , data } = useSession();

   

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
                <Moderators moderators={moderators} />

                <Footer />

            </div>
        </>
    );
};

export default Dashboard;
