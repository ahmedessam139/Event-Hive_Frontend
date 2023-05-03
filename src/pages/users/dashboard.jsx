import UserNavBar from "../../components/userNavBar";
import Counters from "../../components/User_Dashboard_partials/Counters";
import UpcomingEvents from "../../components/User_Dashboard_partials/UpcomingEvents";
import PastEvents from "../../components/User_Dashboard_partials/PastEvents";
import axios from "axios";
import { useEffect ,useState } from "react";

const Dashboard = () => {
    
    const [counters, setCounters] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    const dashboardData = async () => {
        const res = await axios.get("http://localhost:3001/dashboard");
        console.log(res.data);
        console.log(res.data.Counters);
        console.log(res.data.UpcomingEvents);
        console.log(res.data.PastEvents);
        setCounters(res.data.Counters);
        setUpcomingEvents(res.data.UpcomingEvents);
        setPastEvents(res.data.PastEvents);
    }

    useEffect(() => {
        dashboardData();
    }, [])


    return (    
        <>
        <div className="bg-[color:var(--primary-color)]">

           
            <UserNavBar />
            <Counters Counters={counters} />
            <UpcomingEvents UpcomingEvents={upcomingEvents} /> 
            <PastEvents PastEvents={pastEvents} />

        </div>
        </>
    );
};

export default Dashboard;