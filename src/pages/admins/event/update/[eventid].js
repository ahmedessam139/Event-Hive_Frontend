import AdminNavBar from "../../../../components/Admin_Components/AdminNavBar"
import UpdateEventForm from "../../../../components/Admin_Components/Update_Event_page_partials/UpdateEventForm"
import Footer from "../../../../components/FooterComponent"

const updateevent = () => {

    return (
        <div>

            <AdminNavBar />
            <div className="min-h-screen bg-primary-color flex flex-col justify-center items-center ">
                <div className="  p-8 bg-white rounded-lg shadow-lg w-[90%] md:min-w-[65%] mt-4">
                    <div className="flex justify-center mb-8">
                        <a href='/'>
                            <img src="/favicon_io/eventhive-logo.svg" width={500} className="" alt="Logo" />
                        </a>
                    </div>
                    <UpdateEventForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default updateevent