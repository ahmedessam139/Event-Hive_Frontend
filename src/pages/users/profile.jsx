import UserNavBar from "../../components/UserNavBar";
import UpdateForm from "../../components/Profile_page_partials/updateForm";
import ContainerAndLogo from "../../components/ContainerAndLogo";
import Footer from "../../components/FooterComponent";


export default function Profile() {


    return (
        <div className="overflow-y-hidden bg-[color:var(--primary-color)] w-[100%] ">
            <div className="mb-10">
                <UserNavBar />
            </div>
            <ContainerAndLogo>
                <UpdateForm />
            </ContainerAndLogo>
            <Footer />
            
        </div>

    )
}




