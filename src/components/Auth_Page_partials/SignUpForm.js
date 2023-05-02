import { useState } from 'react';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import { TextField,Alert } from '@mui/material';
import axios from 'axios';


function SignUpForm({ }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleShowPasswordChange = () => setShowPassword(!showPassword);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/signup', {
                fullName,
                email,
                username,
                mobileNumber,
                password
            });
            if (res.error) {
                error(res.error);
                setError(res.error);
            } else {
                router.push('/auth/signin');
            }
        }
        catch (error) {
            console.log(error);
            setError("UnHandeled Error");
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-[color:var(--darker-secondary-color)] ">Sign Up <FaKey className="inline-block " /></h1>
            <div className="mb-4">
                <TextField label="Full Name" sx={TextFieldStyle} variant="outlined" type="text" id="fullName" name="fullName" className="w-full" value={fullName} onChange={handleFullNameChange} placeholder="Your full name" required />
            </div>
            <div className="mb-4">
                <TextField label="Email" sx={TextFieldStyle} variant="outlined" type="email" id="email" name="email" className="w-full" value={email} onChange={handleEmailChange} placeholder="Your email address" required />
            </div>
            <div className="mb-4">
                <TextField label="Username" sx={TextFieldStyle} variant="outlined" type="text" id="username" name="username" className="w-full" value={username} onChange={handleUsernameChange} placeholder="Your username" required />
            </div>
            <div className="mb-4">
                <TextField label="Mobile Number" sx={TextFieldStyle} variant="outlined" type="tel" id="mobileNumber" name="mobileNumber" className="w-full" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Your mobile number" required />
            </div>
            <div className="mb-4">
                <div className="relative">
                    <TextField label="Password" sx={TextFieldStyle} variant="outlined" type={showPassword ? "text" : "password"} id="password" name="password" className="w-full pr-10 text-gray-600" value={password} onChange={handlePasswordChange} placeholder="Your password" required />
                    <button type="button" className="absolute top-0 right-0 h-full w-5 text-gray-600 focus:outline-none" onClick={handleShowPasswordChange}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>
            {error && <Alert severity="error" className='mb-5'>{error}</Alert>} {/* show error alert if error exists */}
            <button type="submit" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0">
                Sign Up <FaKey className="inline-block " />
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
const TextFieldStyle =
{
    "& .MuiOutlinedInput-root": {

        "&.Mui-focused fieldset": { borderColor: "var(--darker-secondary-color)" },
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
        color: "var(--gray-color  )"
    }
}

export default SignUpForm;
