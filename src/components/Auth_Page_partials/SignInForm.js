import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function SignInForm({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleShowPasswordChange = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Action taken after submission 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-[color:var(--darker-secondary-color)] ">Sign In</h1>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-bold mb-2">Email Or Username</label>
                <input type="text" id="email" name="email" className="filterInput" value={email} onChange={handleEmailChange} placeholder="Your email or username" required />
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
                Sign In
            </button>
            <br />
            <br />
            <div className="flex justify-center">
                <a href="/users/forgot-password" className="text-[color:var(--darker-secondary-color)] hover:none block mb-4">Forgot Password</a>
            </div>
            <div className="flex justify-center">
                <p className="text-gray-color">Don't have an account yet?</p>
                <a href="/auth/signup" className="text-[color:var(--darker-secondary-color)] hover:none block mb-4">Sign Up</a>
            </div>
        </form>
    );
}

export default SignInForm;
