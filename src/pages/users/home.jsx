import UserNavBar from "../../components/UserNavBar";
import EventsContainer from "../../components/Home_Page_partials/EventsContainer";
import FooterComponent from "../../components/FooterComponent";
import Parteners from "../../components/Home_Page_partials/Parteners";
import LoadingComponent from "../../components/LoadingComponent";
import { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { FaSearchengin } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "../../utils/axios"

function Home(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [allEvents, setAllEvents] = useState(props.allEvents);

    

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
                router.push("/auth/signin");
            } else {
                return;
            }
        }
       

    }, [status]);


   

    // Check if the user exists and is not an admin
    if (status === "authenticated" && data && data.user.role == "admin") {
        return <LoadingComponent />;
    }

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
                        <Parteners />
                        <h1 className="text-2xl text-[color:var(--light-gray)]  mb-5 flex justify-center ">  Upcoming Events</h1>
                        <EventsContainer Events={filteredEvents} />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export async function getServerSideProps() {
    try {
      const response = await axios.get('http://localhost:3001/events');
      const allEvents = response.data;
  
  
      return {
        props: {
          allEvents,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          allEvents: [],
        },
      };
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
