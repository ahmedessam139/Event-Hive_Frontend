import { useRouter } from "next/router";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";

const EventCard = ({ filteredEvents }) => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
            {filteredEvents.length === 0 ? (
                <p>No events yet</p>
            ) : (
                filteredEvents.map((event) => (
                    <div
                        onClick={() => {
                            router.push(`/event/${event.event_id}`);
                        }}
                        className="hover:scale-105 cursor-pointer transition-all mt-5 bg-[color:var(--white-color)] rounded-lg shadow-md px-3 py-3"
                        key={event._id}
                    >
                        <div className="relative h-[21rem]">
                            {event.profile && (
                                <Image
                                    fill
                                    className="object-cover h-full w-full rounded-md"
                                    src={event.profile}
                                    alt=""
                                    sizes="(min-width: 640px) 100vw, 50vw"
                                    priority
                                />
                            )}
                        </div>
                        <div className="flex flex-row justify-between items-start mt-4">
                            <div className="px-2">
                                <p className="text-sm text-gray-800 font-bold">
                                    {event.name.length > 30
                                        ? event.name.slice(0, 30) + "..."
                                        : event.name}
                                </p>
                                <p className="text-sm text-gray-800">{event.venue}</p>
                                <p className="text-sm text-gray-800">{event.date}</p>
                            </div>
                            {/* Star component */}
                            {/*Make items inside this dev align to Right  */}
                            <div className="flex flex-col justify-end">
                                <span className="w-full flex flex-row justify-end ">
                                    <FaUsers />
                                    <span className="ml-2 text-sm">4,92</span>
                                </span>
                                <p className="text-sm text-gray-800 mt-2">
                                    <strong className="whitespace-nowrap">Starts From {event.price}Egp</strong>
                                </p>
                            </div>

                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default EventCard;
