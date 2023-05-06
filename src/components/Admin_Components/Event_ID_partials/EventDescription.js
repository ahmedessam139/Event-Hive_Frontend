function EventDescription({eventData}) {
    return (
        <div className="mb-4 max-w-5xl bg-white px-6 py-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                About the Event
            </h3>
            
                    <p className="text-gray-600 text-md" >
                        {eventData.description}
                    </p>
              
        </div>
    );
}

export default EventDescription;