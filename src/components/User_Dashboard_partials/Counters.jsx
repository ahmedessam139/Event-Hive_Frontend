
const Counters = () => {

    return (
        <div className=" bg-white p-4 m-8 rounded-lg shadow-md ">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div class="col-span-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-lg">
                    <div class="p-4">
                        <h4 class="text-lg font-medium mb-2">UpComing Events For you<i class="mdi mdi-chart-line mdi-24px float-right"></i></h4>
                        <h2 class="text-4xl font-bold"> 3</h2>
                        <h6 class="text-xs font-medium">Wish You enjoy Your Events</h6>
                    </div>
                </div>
                <div class="col-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg">
                    <div class="p-4">
                        <h4 class="text-lg font-medium mb-2">Your Joined Events<i class="mdi mdi-bookmark-outline mdi-24px float-right"></i></h4>
                        <h2 class="text-4xl font-bold">20</h2>
                        <h6 class="text-xs font-medium">Gooooood</h6>
                    </div>
                </div>
                <div class="col-span-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg">
                    <div class="p-4">
                        <h4 class="text-lg font-medium mb-2">Your Membership Since <i class="mdi mdi-diamond mdi-24px float-right"></i></h4>
                        <h2 class="text-4xl font-bold">2 years</h2>
                        <h6 class="text-xs font-medium">We are proud to be with us</h6>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Counters;