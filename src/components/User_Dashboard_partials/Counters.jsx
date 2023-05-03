const Counters = ({ Counters }) => {

    return (
      <div className=" bg-white p-4 m-8 rounded-lg shadow-md ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="col-span-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-lg">
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">UpComing Events For you<i className="mdi mdi-chart-line mdi-24px float-right"></i></h4>
              <h2 className="text-4xl font-bold">{Counters.upcomingEvents}</h2>
              <h6 className="text-xs font-medium">Wish You enjoy Your Events</h6>
            </div>
          </div>
          <div className="col-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg">
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">Your Joined Events<i className="mdi mdi-bookmark-outline mdi-24px float-right"></i></h4>
              <h2 className="text-4xl font-bold">{Counters.joinedEvents}</h2>
              <h6 className="text-xs font-medium">Great job on attending {Counters.joinedEvents}</h6>
            </div>
          </div>
          <div className="col-span-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg">
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">Your Membership Since <i className="mdi mdi-diamond mdi-24px float-right"></i></h4>
              <h2 className="text-4xl font-bold">{Counters.membershipSince}</h2>
              <h6 className="text-xs font-medium">We are proud to be with us</h6>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Counters;
  