import ContainerAndLogo from '../../components/ContainerAndLogo';
import SignInForm from '../../components/Auth_Page_partials/SignInForm';
import { useSelector } from "react-redux";

export default function SignIn() {

  return (
    <div className="flex justify-center bg-[color:var(--primary-color)] w-[100%] ">
      <div className="flex justify-center  md:w-[60%] p-5 ">
        <ContainerAndLogo>
          <SignInForm />
        </ContainerAndLogo>
      </div>
    </div>
  );
}


// export async function getServerSideProps(context) {
//   const { req } = context;
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   if (isLoggedIn) {
//     // Redirect to home page if user is already logged in
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
