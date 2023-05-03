const UpcomingEvents = ({ UpcomingEvents }) => {
    return (
      <div className="bg-white p-4 m-8 rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <p className="mb-2 text-3xl text-gray-500">Upcoming</p>
          <button className="bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-4 rounded-full">See All..</button>
        </div>
        <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Event</th>
                <th className="py-3 px-6 text-left">Venue</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Ticket Type</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {UpcomingEvents.map((event) => (
                <tr key={event.event_id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{event.name}</td>
                  <td className="py-3 px-6 text-left">{event.venue}</td>
                  <td className="py-3 px-6 text-left">{event.date}</td>
                  <td className="py-3 px-6 text-left">{event.ticketType}</td>
                  <td className="py-3 px-6 text-left">{event.price}</td>
                  <td className="py-3 px-6 text-left">{event.status}</td>
                  <td className="py-3 px-6 text-left">{event.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default UpcomingEvents;
  