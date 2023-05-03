import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function ContainerAndLogo({ children }) {
  return (
    <div className="min-h-screen bg-primary-color flex flex-col justify-center items-center ">
      <div className="  p-8 bg-white rounded-lg shadow-lg w-[90%] md:w-[65%] ">
        <div className="flex justify-center mb-8">
          <a href='/'>
            <img
              src="/favicon_io/eventhive-logo.svg"
              width={2000}
              height={400}
              alt="Logo"
            />
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ContainerAndLogo;
