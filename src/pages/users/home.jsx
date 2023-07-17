import UserNavBar from "../../components/UserNavBar";
import EventsContainer from "../../components/Home_Page_partials/EventsContainer";
import FooterComponent from "../../components/FooterComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { FaSearchengin } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import Partners from "../../components/Home_Page_partials/Partners";
import { set } from "local-storage";


function Home() {
    const [allEvents, setAllEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        //Add axios call to get all events
        setAllEvents([
            {
                "event_id": 1,
                "name": "هارلي",
                "venue": "Masria Plaza Hall",
                "date": "Every Friday",
                "price": "49.99",
                "profile": "https://www.dostor.org/Upload/libfiles/406/2/253.jpg"
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
            },
            {
                "event_id": 4,
                "name": "Hip Hop Jam",
                "venue": "American Airlines Arena",
                "date": "2023-08-08",
                "price": "59.99",
                "profile": "https://picsum.photos/id/240/400/300"
            },
            {
                "event_id": 5,
                "name": "EDM Kingdom",
                "venue": "Las Vegas Motor Speedway",
                "date": "2023-09-15",
                "price": "69.99",
                "profile": "https://picsum.photos/id/241/400/300"
            },
            {
                "event_id": 6,
                "name": "JazzFest",
                "venue": "New Orleans Fairgrounds",
                "date": "2023-10-12",
                "price": "49.99",
                "profile": "https://picsum.photos/id/242/400/300"
            },
            {
                "event_id": 7,
                "name": "Classical Symphony",
                "venue": "Walt Disney Concert Hall",
                "date": "2023-11-05",
                "price": "79.99",
                "profile": "https://picsum.photos/id/243/400/300"
            },
            {
                "event_id": 8,
                "name": "Blues & Brews",
                "venue": "Telluride Town Park",
                "date": "2023-12-20",
                "price": "59.99",
                "profile": "https://picsum.photos/id/244/400/300"
            }
        ]
        );
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
            if (data.user.role === "user") {
                return;
            } else {
                router.push("/auth/signin");
            }
        }
        if (status === "unauthenticated") {
            return;
        }

    }, [status]);

    if (allEvents.length === 0) {
        return <LoadingComponent />;
    }
    if (data) {
        if (data.user.role != "admin") {
            return (
                <div className=" bg-[color:var(--primary-color)] h-full">
                    <UserNavBar />
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
                                <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Our Partners </h1>
                                <Partners />
                                <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Upcoming Events</h1>
                                <EventsContainer Events={filteredEvents} />
                            </div>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            );
        }
    } else if (!data || status != "Loading") {
        return (
            <div className=" bg-[color:var(--primary-color)] h-full">
                <UserNavBar />
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
                            <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Our Partners </h1>
                            <Partners />
                            <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Upcoming Events</h1>
                            <EventsContainer Events={filteredEvents} />
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );

    }
}



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

export default Home;