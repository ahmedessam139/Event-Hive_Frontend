import AdminNavBar from "../../components/Admin_Components/AdminNavBar";
import UpdateForm from "../../components/Profile_page_partials/updateForm";
import Footer from "../../components/FooterComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Profile() {

  
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
      if (status === "authenticated") {
          if (data.user.role === "admin") {
              return;
          } else {
              router.push("/auth/signin");
          }
      }
      if (status === "unauthenticated") {
          router.push("/auth/signin");
      }

  }, [status]);


  // Check if the user exists and is not authenticated
  if (status === "unauthenticated" || (status === "authenticated" && !data)) {
      return <LoadingComponent />;
  }

  // Check if the user exists and is not an admin
  if (status === "authenticated" && data && data.user.role !== "admin") {
      return <LoadingComponent />;
  }


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




