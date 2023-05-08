
import AdminNavBar from "../../../components/Admin_Components/AdminNavBar"
import AddEventForm from "../../../components/Admin_Components/Add_Event_page_partials/AddEventForm"
import Footer from "../../../components/FooterComponent"

const addevent = () => {
    return (
        <div>
         
                <AdminNavBar />
            <div className="min-h-screen bg-primary-color flex flex-col justify-center items-center ">
                <div className="  p-8 bg-white rounded-lg shadow-lg w-[90%] md:min-w-[65%] ">
                    <div className="flex justify-center mb-8">
                        <a href='/'>
                            <img src="/favicon_io/eventhive-logo.svg" width={500} className="" alt="Logo" />
                        </a>
                    </div>
                    <AddEventForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default addevent