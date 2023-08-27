import EventDataContainer from '../../components/Event_ID_partials/EventDataContainer';
import EventPricing from '../../components/Event_ID_partials/EventPricing';
import EventDescription from '../../components/Event_ID_partials/EventDescription';
import Cover from '../../components/Event_ID_partials/Cover';
import UserNavBar from "../../components/UserNavBar";
import Footer from "../../components/FooterComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "../../utils/axios";


function EventPage() {
    const router = useRouter();
    const eventId = router.query.eventid;
    const [eventData, setEventData] = useState([]);

    // function to handle share button click
    const share = () => {
        console.log("share button clicked");
    };

    useEffect(() => {
        setEventData( {
            "name": "ٌGlobal Village",
            "cover": "https://i.ibb.co/hsHTWjN/1693156855046.jpg",
            "date": "2023-07-14",
            "description": "Global Village is the biggest celebration of cultures from around the world.! Global Village encourages social sustainability, world awareness, and cultural understanding. People showcased their nations through singing, dancing, food, customs, costumes, music and tradition",
            "time": "10:00 AM",
            "venue": "123 Main St, Anytown USA",
            "organizer": "Example Organizer",
            "participants": [
              {
                "id": "123",
                "name": "John Doe"
              },
              {
                "id": "456",
                "name": "Jane Smith"
              }
            ],
            "tickets": [
              {
                "type": "General",
                "price": 100,
                "Available": true,
                "seated": true,
                "seats": {
                  "A": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "B": [0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1],
                  "C": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
                  "D": [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
                  "E": [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3]
                }
              },
              {
                "type": "VIP",
                "price": 200,
                "Available": false,
                "Seated": true,
                "seats": {
                  "A": [0, 0, 0],
                  "B": [0, 0, 0],
                  "C": [0, 0, 0],
                  "D": [0, 0, 0]
                }
              },
              {
                "type": "VVIP",
                "price": 500,
                "Available": true,
                "Seated": false,
                "seats": {
                  "A": [0, 0, 0, 0, 0, 0, 0, 0],
                  "B": [0, 0, 3, 0, 0, 0, 0, 0],
                  "C": [0, 0, 3, 0, 0, 0, 0, 0],
                  "D": [0, 0, 3, 0, 0, 0, 0, 0],
                  "L": [3, 0, 0, 0, 0, 0, 3, 3]
                }
              }
            ]
          });
    }, []);

    const { status, data } = useSession();

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



    if (!eventData || !eventData.cover)
        return <LoadingComponent />;
    else
        return (
            <div className="bg-[color:var(--primary-color)]">
                <UserNavBar />
                <div className="flex flex-col items-center justify-center md:mx-5">

                    {/* Top div with image */}
                    <Cover eventData={eventData} />

                    {/* Second div with event details and ticket pricing */}
                    <EventDataContainer eventData={eventData} />

                    {/* Third div with major event details */}
                    <div className="container mt-4 bg-[color:var(--primary-color)]">
                        <div className="container">
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                                <EventDescription eventData={eventData} />
                                <EventPricing eventData={eventData} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
}
export default EventPage;
