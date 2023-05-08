
import { useState, useEffect } from 'react';
import { FaKey } from 'react-icons/fa';
import { TextField, Alert, FormControl, MenuItem, Select, Button, InputLabel } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { FadeLoader } from 'react-spinners';

function UpdateForm({ }) {
    const { status, data } = useSession();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (data) {
            console.log(data.user);
            setFirstName(data.user.firstName || '');
            setLastName(data.user.lastName || '');
            setEmail(data.user.email || '');
            setUsername(data.user.username || '');
            setMobileNumber(data.user.mobileNumber || '');
            setGender(data.user.gender || '');
        }
    }, [data]);

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/update-profile', {
                firstName,
                lastName,
                email,
                mobileNumber,
                gender,
                password
            });
            if (res.error) {
                error(res.error);
                setError(res.error);
            } else {
                // handle success case
            }
        }
        catch (error) {
            console.log(error);
            setError("UnHandeled Error");
        }
    }
    if (status != "authenticated" || data.user === null) return (
        <div className="flex justify-center w-full">
            <FadeLoader color="var(--darker-secondary-color)" loading={true} size={150} />
        </div>)
    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-2xl font-bold mb-6 text-[color:var(--darker-secondary-color)] w-full md:w-1/2 inline-block">Update Profile <FaKey className="inline-block " /></h1>
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="First Name" sx={TextFieldStyle} variant="outlined" type="text" id="firstName" name="firstName" className="w-full" value={firstName} onChange={handleFirstNameChange} placeholder="Your first name" required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Last Name" sx={TextFieldStyle} variant="outlined" type="text" id="lastName" name="lastName" className="w-full" value={lastName} onChange={handleLastNameChange} placeholder="Your last name" required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Email" sx={TextFieldStyle} variant="outlined" type="email" id="email" name="email" className="w-full" value={email} onChange={handleEmailChange} placeholder="Your email address" required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField disabled label="Username" sx={TextFieldStyle} variant="outlined" type="text" id="username" name="username" className="w-full" value={username} onChange={handleUsernameChange} placeholder="Your username" required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Mobile Number" sx={TextFieldStyle} variant="outlined" type="tel" id="mobileNumber" name="mobileNumber" className="w-full" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Your mobile number" required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <FormControl variant="outlined" sx={TextFieldStyle} className="w-full">
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select labelId="gender-label" id="gender" name="gender" value={gender} onChange={handleGenderChange} label="Gender" >
                            <MenuItem value="male" >Male </MenuItem >
                            <MenuItem value="female">Female </MenuItem >
                            <MenuItem value="other">Other </MenuItem >
                        </Select>
                    </FormControl>
                </div>

                <div className="w-full  px-2 mb-4 relative flex justify-center ">
                    <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full  sm:w-auto sm:ml-4" onClick={() => router.push("/auth/signup")}>
                        Change Password
                        <FaKey />
                    </button>
                </div>
            </div>
            {error && <Alert severity="error">{error}</Alert>}
            <div className="mt-6">
                <button type="submit" className=" btn py-2 px-4 text-white rounded-lg bg-[color:var(--secondary-color)] hover:bg-[color:var(--darker-secondary-color)] focus:outline-none focus:ring-2 focus:ring-[color:var(--darker-secondary-color)]">Update</button>
            </div>
        </form>
    );
    ``


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

export default UpdateForm;
