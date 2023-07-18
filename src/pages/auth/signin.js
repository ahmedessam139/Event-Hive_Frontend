import React from 'react';
import ContainerAndLogo from '../../components/ContainerAndLogo';
import SignInForm from '../../components/Auth_Page_partials/SignInForm';
import Footer from "../../components/FooterComponent";

export default function SignIn() {
  const adminTestModeMessage = 'To enter test mode as an admin, please login with the username "admin" and password "admin".';
  const userTestModeMessage = 'To enter test mode as a user, please login with the username "user" and password "user".';
  
  return (
    <>
      <div className="flex justify-center bg-[color:var(--primary-color)] w-[100%] ">
        <div className="flex justify-center  md:w-[60%] md:p-5 ">
          <ContainerAndLogo>
            <SignInForm />
          </ContainerAndLogo>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
        <p>{adminTestModeMessage}</p>
        </div>
      <div className="fixed bottom-20 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
      <p>{userTestModeMessage}</p>
        </div>
      <Footer />
    </>
  );
}
