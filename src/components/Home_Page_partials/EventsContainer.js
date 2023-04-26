// EventsContainer.js

import EventCard from "./EventCard";

const EventsContainer = ({ filteredEvents }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {filteredEvents.length === 0 ? (
                <p>No Events Found</p>
            ) : (
                filteredEvents.map((event) => <EventCard event={event} />)
            )}
        </div>
    );
};

export default EventsContainer;
