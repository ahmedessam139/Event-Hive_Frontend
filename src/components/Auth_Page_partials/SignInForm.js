import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaSignInAlt, FaDoorOpen } from 'react-icons/fa';
import { login } from "../../store/authSlice";
import { useRouter } from "next/router";
import {signIn} from "next-auth/react";
import { TextField } from '@mui/material';
import { useSession } from 'next-auth/react';

function SignInForm({ }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleusernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleShowPasswordChange = () => setShowPassword(!showPassword);
    const router = useRouter();
    const { data, status } = useSession();

    //if there is a session, redirect to protected page
    useEffect(() => {
        if (status === "authenticated") router.push('/protected');
    }, [status]);
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await signIn('credentials',{
            username: username,
            password: password,
            redirect: false
        })
        if (res.error) {
            console.log(res.error);
        }
        else {
            console.log(res);
            router.push('/protected');
        }
       
    };


   
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-[color:var(--darker-secondary-color)] ">Sign In <FaSignInAlt className="inline-block " /></h1>
            <div className="mb-4">
                <TextField  label="Email Or Username" variant="outlined" type="text" id="username" name="username" className="filterInput border-[color:var(--darker-secondary-color)]" value={username} onChange={handleusernameChange} placeholder="Your email or username" required />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 font-bold mb-2">Password</label>
                <div className="relative">
                    <TextField label="Password" variant="outlined" type={showPassword ? "text" : "password"} id="password" name="password" className="filterInput pr-10 text-gray-600" value={password} onChange={handlePasswordChange} placeholder="Your password" required />
                    <button type="button" className="absolute top-0 right-0 h-full w-10 text-gray-600 focus:outline-none" onClick={handleShowPasswordChange}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>
            <button type="submit" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                Sign In  <FaDoorOpen className="inline-block ml-2" />
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
