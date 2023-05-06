// EventsContainer.js
import EventCard from "./EventCard";

const EventsContainer = ({ Events }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 md:gap-3">
            {Events.length === 0 ? (
                <p>No Events Found</p>
            ) : (
                Events.map((event) => <EventCard event={event} />)
            )}
        </div>
    );
};

export default EventsContainer;
