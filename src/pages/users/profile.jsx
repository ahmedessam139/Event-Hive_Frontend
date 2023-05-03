import UserNavBar from "../../components/UserNavBar";
import UpdateForm from "../../components/Profile_page_partials/updateForm";
import ContainerAndLogo from "../../components/ContainerAndLogo";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Profile() {


    return (
        <div className="overflow-y-hidden bg-[color:var(--primary-color)] w-[100%] ">
            <div className="mb-10">
                <UserNavBar />
            </div>
            <ContainerAndLogo>
                <UpdateForm />
            </ContainerAndLogo>
        </div>

    )
}




