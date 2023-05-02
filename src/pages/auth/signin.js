import ContainerAndLogo from '../../components/ContainerAndLogo';
import SignInForm from '../../components/Auth_Page_partials/SignInForm';
import { useSelector } from "react-redux";

export default function SignIn() {
  
    return (
      <ContainerAndLogo>
        <SignInForm/>
      </ContainerAndLogo>
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
