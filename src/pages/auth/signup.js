import ContainerAndLogo from '../../components/ContainerAndLogo';
import SignUpForm from '../../components/Auth_Page_partials/SignUpForm';

export default function SignUp() {


    return (
        <div className="flex justify-center bg-[color:var(--primary-color)] w-[100%] ">
            <div className="flex justify-center  md:w-[60%] md:p-5 ">
                <ContainerAndLogo>
                    <SignUpForm />
                </ContainerAndLogo>
            </div>
            <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
                <p>This website is under development. Feel free to explore without registration or data collection – simply sign in ✌️.</p>
            </div>
        </div>
    );
}

