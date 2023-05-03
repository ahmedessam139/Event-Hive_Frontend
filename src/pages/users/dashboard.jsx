import UserNavBar from "../../components/userNavBar";
import Counters from "../../components/User_Dashboard_partials/Counters";
import UpcomingEvents from "../../components/User_Dashboard_partials/UpcomingEvents";

const Dashboard = () => {

    return (    
        <>
        <div className="bg-[color:var(--primary-color)]">

           
            <UserNavBar />
            <Counters    />
            <UpcomingEvents />  

        </div>
        </>
    );
};

export default Dashboard;