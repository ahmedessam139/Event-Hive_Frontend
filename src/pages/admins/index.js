import AdminNavBar from "../../components/Admin_Components/AdminNavBar";
import EventsContainer from "../../components/Admin_Components/Home_page_partials/EventsContainer";
import FooterComponent from "../../components/FooterComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaSearchengin } from "react-icons/fa";
import axios from "../../utils/axios";



const AdminsHome = () => {

    const [allEvents, setAllEvents] = useState([
        {
            "event_id": 1,
            "name": "Global Village",
            "venue": "Heliopolis University",
            "date": "2023-07-12",
            "price": "200",
            "profile": "https://i.ibb.co/hsHTWjN/1693156855046.jpg"
        },
        {
          "event_id": 2,
          "name": "PopNation",
          "venue": "Barclays Center",
          "date": "2023-06-05",
          "price": "29.99",
          "profile": "https://picsum.photos/id/238/400/300"
        },
        {
          "event_id": 3,
          "name": "CountryFest",
          "venue": "Nissan Stadium",
          "date": "2023-07-20",
          "price": "39.99",
          "profile": "https://picsum.photos/id/239/400/300"
        }]
        );
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {

       //API call to get all events
       
    }, []);

    const filteredEvents = allEvents.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const { status, data } = useSession();
    const router = useRouter();

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

    


    return (
        <>
            <div className=" bg-[color:var(--primary-color)] h-full">
                <AdminNavBar />
                <div className="flex justify-center w-full">
                    <div className="flex w-full mx-auto justify-between container">
                        <div className="p-4  w-full flex flex-col items-center">
                            <div className="flex justify-center mb-8">
                                <a href='/'>
                                    <img src="/favicon_io/eventhive-logo.svg" width={400} height={400} alt="Logo" />
                                </a>
                            </div>
                            <div className="flex justify-center mb-4 md:w-[60%] w-[90%]">
                                <TextField label="Search Events" sx={TextFieldStyle} variant="outlined" type="text" placeholder="Search by Event Name or Venue...." InputProps={{ endAdornment: <FaSearchengin size={24} />, }} value={searchQuery} onChange={handleSearchQueryChange} />
                            </div>
                            <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Your Events</h1>
                            <EventsContainer Events={filteredEvents} />
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        </>
    );
};

const TextFieldStyle =
{
    "& .MuiOutlinedInput-root": {

        "&.Mui-focused fieldset": { borderColor: "var(--darker-secondary-color)" },
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
        color: "var(--gray-color  )"
    },
    width: "100%",

}

export default AdminsHome;
