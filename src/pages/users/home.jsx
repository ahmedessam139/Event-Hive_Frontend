import Dashboard_Filter from "@/components/Dashboard_Filter";
import Popup_Filter from "@/components/Popup_Filter";
import UserNavBar from "@/components/UserNavBar";
import EventsContainer from "@/components/Home_Page_partials/EventsContainer";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

function Home() {
    // const router = useRouter();
    const picRatio = 0.606;

    const [allEvents, setAllEvents] = useState([]);
    const [popupFilterOpen, setPopupFilterOpen] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        keyword: "",
        category: "",
        dateRange: "",
        price: [10, 3000],
    });

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/events');
            const data = await response.json();
            setAllEvents(data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
      
      }, []);

    // dont move this state becoz it needs allevents
    const [filteredEvents, setFilteredEvents] = useState(allEvents);

    // Update filteredEvents state whenever allEvents or filterOptions change
    useEffect(() => {
        const newFilteredEvents = allEvents.filter((event) => {
            // Check if keyword filter matches
            if (
                filterOptions.keyword.toLowerCase() &&
                !event.name.toLowerCase().includes(filterOptions.keyword.toLowerCase())
            ) {
                return false;
            }

            // Check if date range filter matches
            if (filterOptions.dateRange) {
                const date = filterOptions.dateRange;
                // Split the date string into an array of substrings
                const dateParts = event.date.split("/");
                // Rearrange the array elements to get yyyy-mm-dd format
                const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                if (formattedDate < date) {
                    return false;
                }
            }

            // Check if price filter matches
            if (
                event.price < filterOptions.price[0] ||
                event.price > filterOptions.price[1]
            ) {
                return false;
            }

            return true;
        });

        setFilteredEvents(newFilteredEvents);
    }, [allEvents, filterOptions]);

    const handleFilterClear = () => {
        setFilterOptions({
            keyword: "",
            category: "",
            dateRange: "",
            price: [10, 3000],
        });
        setFilteredEvents(allEvents);
        setPopupFilterOpen(false);
    };

    return (
        <div className="overflow-y-hidden bg-[color:var(--primary-color)]">
            <UserNavBar />
            <div className="flex m-auto">
                <div className="flex justify-center w-full">
                    <div className="flex  w-full  gap-8 lg:gap-8  h-[calc(88vh)]">
                        {/* Render the regular filter for medium screens and above */}
                        <div className="hidden md:flex flex-col p-4 sticky top-0 w-1/6 md:w-1/4">
                            <Dashboard_Filter
                                filterOptions={filterOptions}
                                setFilterOptions={setFilterOptions}
                                handleFilterClear={handleFilterClear}
                            />
                        </div>
                        {/* Render the popup filter for small screens */}
                        {popupFilterOpen && (
                            <div className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg p-4 w-5/6">
                                    <Popup_Filter
                                        filterOptions={filterOptions}
                                        setFilterOptions={setFilterOptions}
                                        handleFilterClear={handleFilterClear}
                                        handleClose={() => setPopupFilterOpen(false)}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Render the main content of the dashboard */}
                        <div className="flex w-full md:w-3/4 mx-auto justify-between container">
                            <div className="p-4 overflow-y-auto w-full h-[calc(80vh)]">
                                <h1 className="text-2xl text-[color:var(--darker-secondary-color)] ml-10 mb-5">  Events</h1>
                                <EventsContainer filteredEvents={filteredEvents} />
                            </div>
                        </div>
                        {/* Bottom buttons */}
                        <div className="fixed bottom-3 right-3">
                            {/* Button to open the popup filter */}
                            <button
                                onClick={() => setPopupFilterOpen(true)}
                                className="md:hidden flex items-center justify-center w-[4rem] h-[4rem] text-white rounded-full bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] hover:scale-105 shadow-lg cursor-pointer transition-all ease-in-out focus:outline-none"
                                title="Filter Events"
                            >
                                <FaFilter className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
