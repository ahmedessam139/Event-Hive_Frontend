import UserNavBar from "../../components/UserNavBar";
import UpdateForm from "../../components/Profile_page_partials/updateForm";
import Footer from "../../components/FooterComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Profile() {

  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (data.user.role === "user") {
        return;
      } else {
        router.push("/auth/signin");
      }
    }
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }

  }, [status]);


  if (status === "unauthenticated" || status === "Loading") {

    return (
      <LoadingComponent />
    )
  }



  return (
    <div className="overflow-y-hidden bg-[color:var(--primary-color)] w-[100%] ">
      <div className="mb-10">
        <UserNavBar />
      </div>
      <div className="min-h-screen bg-primary-color flex flex-col justify-center items-center ">
        <div className="  p-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[65%] ">
          <div className="flex justify-center mb-8">
            <a href='/'>
              <img src="/favicon_io/eventhive-logo.svg" width={500} className="" alt="Logo" />
            </a>
          </div>
          <UpdateForm />
        </div>
      </div>
      <Footer />

    </div>

  )
}




