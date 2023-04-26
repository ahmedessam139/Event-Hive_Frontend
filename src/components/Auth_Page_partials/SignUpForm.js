import { useState } from 'react';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';


import Head from 'next/head';

function SignUpForm({}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleShowPasswordChange = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    };


    return(
        <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-6 text-[color:var(--darker-secondary-color)] ">Sign Up <FaKey className="inline-block " /></h1>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-600 font-bold mb-2">Full Name</label>
                        <input type="text" id="fullName" name="fullName" className="filterInput text-gray-600" value={fullName} onChange={handleFullNameChange} placeholder="Your full name" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="filterInput text-gray-600" value={email} onChange={handleEmailChange} placeholder="Your email address" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 font-bold mb-2">Username</label>
                        <input type="text" id="username" name="username" className="filterInput text-gray-600" value={username} onChange={handleUsernameChange} placeholder="Your username" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="block text-gray-600 font-bold mb-2">Mobile Number</label>
                        <input type="tel" id="mobileNumber" name="mobileNumber" className="filterInput text-gray-600" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Your mobile number" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-bold mb-2">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} id="password" name="password" className="filterInput pr-10 text-gray-600" value={password} onChange={handlePasswordChange} placeholder="Your password" required />
                            <button type="button" className="absolute top-0 right-0 h-full w-10 text-gray-600 focus:outline-none" onClick={handleShowPasswordChange}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                        Sign Up<FaKey className="inline-block " />
                    </button>
                    <br />
                    <br />
                    <div className="flex justify-center">
                        <p className="text-gray-color">Already have an account?</p>
                        <a href="/auth/signin" className="text-[color:var(--darker-secondary-color)] hover:none block mb-4">Sign In</a>
                    </div>
                </form>
    );
}

    export default SignUpForm;
