import AdminNavBar from "../../components/Admin_Components/AdminNavBar";
import UpdateForm from "../../components/Profile_page_partials/updateForm";
import ContainerAndLogo from "../../components/ContainerAndLogo";
import Footer from "../../components/FooterComponent";


export default function Profile() {


    return (
        <div className="overflow-y-hidden bg-[color:var(--primary-color)] w-[100%] ">
            <div className="mb-10">
                <AdminNavBar />
            </div>
            <div className="min-h-screen bg-primary-color flex flex-col justify-center items-center ">
            <div className="  p-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[65%] ">
              <div className="flex justify-center mb-8">
                <a href='/'>
                  <img src="/favicon_io/eventhive-logo.svg" width={500}  className="" alt="Logo" />
                </a>
              </div>
                <UpdateForm />
            </div>
          </div>
            <Footer />
            
        </div>

    )
}




