import EventDataContainer from '../../components/Event_ID_partials/EventDataContainer';
import EventPricing from '../../components/Event_ID_partials/EventPricing';
import EventDescription from '../../components/Event_ID_partials/EventDescription';
import Cover from '../../components/Event_ID_partials/Cover';
import UserNavBar from "@/components/UserNavBar";
import { getUserToken } from "@/utils/getUserToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const eventDataMock = {
    name: "Example Event",
    cover: "https://www.dostor.org/Upload/libfiles/406/2/253.jpg",
    date: "2023-05-01",
    time: "10:00 AM",
    venue: "123 Main St, Anytown USA",
    organizer: "Example Organizer",
    participants: [
        { id: "123", name: "John Doe" },
        { id: "456", name: "Jane Smith" },
    ],
    
    ticketsTypes : [
        {
            type: "General*",
            price: 20,
        },
        {
            type: "VIP*",
            price: 30,
        },
        { 
            type: "VVIP*",
            price: 10,
        },
    ]
};


function EventPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const userId = getUserToken();
    const [eventData, setEventData] = useState([]);
    const [isUserRegistered, setIsUserRegistered] = useState(false);

    // function to handle share button click
    const share = () => {
        console.log("share button clicked");
    };

    useEffect(() => {
        setEventData(eventDataMock);
        setIsUserRegistered(
            eventDataMock.participants.some(
                (participant) => participant.id === userId
            )
        );

        
    }, [eventId, userId]);

    if (!eventData || !eventData.cover)
        return <div>loading...</div>;
    else
        return (
            <div className="bg-[color:var(--primary-color)]">
                <UserNavBar />
                <div className="flex flex-col items-center justify-center">

                    {/* Top div with image */}
                    <Cover eventData={eventData}/>

                    {/* Second div with event details and ticket pricing */}
                    <EventDataContainer eventData={eventData} isUserRegistered={isUserRegistered} share={share}/>

                    {/* Third div with major event details */}
                    <div className="container mt-4 bg-[color:var(--primary-color)]">
                        <div className="container">
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                                <EventDescription eventData={eventData}/>
                                <EventPricing eventData={eventData} isUserRegistered={isUserRegistered}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default EventPage;
