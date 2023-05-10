import { TextField } from '@mui/material';
import { FaPlus, FaTimes } from 'react-icons/fa';
import SeatsMap from './SeatsMap';
import LoadingComponent from '../../LoadingComponent';
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateEventForm() {
    const [eventName, setEventName] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [description, setDescription] = useState('');
    const [ticketTypes, setTicketTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/update_event')
            .then(response => {
                setEventName(response.data.eventName);
                setCoverImage(response.data.coverImage);
                setDate(response.data.date);
                setTime(response.data.time);
                setVenue(response.data.venue);
                setDescription(response.data.description);
                setTicketTypes(response.data.ticketTypes);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    const handleTicketTypeChange = (index, field, value) => {
        const updatedTicketTypes = [...ticketTypes];
        updatedTicketTypes[index][field] = value;
        setTicketTypes(updatedTicketTypes);
    };

    const handleAddTicketType = () => {
        setTicketTypes([
            ...ticketTypes,
            {
                name: '', price: '', limit: '', seated: false, seats: {
                    "A": [0, 0, 3],
                    "B": [0, 0, 3],
                    "C": [0, 0, 0],
                    "D": [0, 0, 0]
                }
            },
        ]);
    };

    const handleRemoveTicketType = (index) => {
        const updatedTicketTypes = [...ticketTypes];
        updatedTicketTypes.splice(index, 1);
        setTicketTypes(updatedTicketTypes);
    };

    const handleSeatsSet = (index, seats, limit) => {
        const updatedTicketTypes = [...ticketTypes];
        updatedTicketTypes[index].seats = seats;
        updatedTicketTypes[index].limit = limit;
        setTicketTypes(updatedTicketTypes);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopup = () => {
        setIsOpen(false);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            eventName,
            coverImage,
            date,
            time,
            venue,
            description,
            ticketTypes,
        };

        console.log(formData);
    };

    if (ticketTypes.length === 0) {
        return (
            <div className="flex flex-wrap -mx-2">
             <LoadingComponent />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">

                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Event Name" sx={TextFieldStyle} variant="outlined" className="w-full" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField sx={TextFieldStyle} variant="outlined" className="w-full" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField sx={TextFieldStyle} variant="outlined" className="w-full" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Venue" sx={TextFieldStyle} variant="outlined" className="w-full" value={venue} onChange={(e) => setVenue(e.target.value)} required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <TextField label="Description" sx={TextFieldStyle} variant="outlined" className="w-full" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} required />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    {/**Upload cover photo  */}
                    <div>
                        <label className="mb-2 block text-gray-500">
                            Event Cover
                        </label>
                        <input
                            type="file"
                            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-[color:var(--secondary-color)] file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                            onChange={(e) => setCoverImage(e.target.files[0])}
                            accept="image/*"
                        />
                    </div>
                </div>

            </div>
            <div className="flex flex-row-reverse ">
                <button type="button" className="p-3 text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)]   sm:w-auto  rounded-full	" onClick={handleAddTicketType}>
                    Add Ticket <FaPlus className="inline-block " size={22} />
                </button>
            </div>
            <div className="bg-white shadow-md rounded my-3 overflow-x-auto">

                <table className="min-w-max w-full table-auto overflow-x-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3  text-center">Ticket Type/Name</th>
                            <th className="py-3  text-center">Price</th>
                            <th className="py-3  text-center">Limit</th>
                            <th className="py-3  text-center">Seated</th>
                            <th className="py-3  text-center">Seats</th>
                            <th className="py-3  text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {ticketTypes.map((ticketType, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 text-center">
                                    <input className="outline-none border rounded-md py-1 px-3" type="text" value={ticketType.name} onChange={(e) => handleTicketTypeChange(index, 'name', e.target.value)} required />
                                </td>
                                <td className="py-3 text-center">
                                    <input className="outline-none border rounded-md py-1 px-3" type="text" value={ticketType.price} onChange={(e) => handleTicketTypeChange(index, 'price', e.target.value)} required />
                                </td>
                                <td className="py-3 text-center">
                                    <input className="outline-none border rounded-md py-1 px-3" type="number" value={ticketType.limit} onChange={(e) => handleTicketTypeChange(index, 'limit', e.target.value)} disabled={ticketType.seated} required={!ticketType.seated} />
                                </td>
                                <td className="py-3 text-center">
                                    <input
                                        className="outline-none border rounded-md py-1 px-3 bg-[color:var(--darker-secondary-color)] border-[color:var(--darker-secondary-color)]"
                                        type="checkbox"
                                        checked={ticketType.seated}
                                        
                                    />
                                </td>
                                <td className="py-3 text-center">
                                    <button
                                        type="button"
                                        className={`btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full sm:w-auto sm:ml-4 ${!ticketType.seated ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        onClick={() => {
                                            togglePopup();
                                            setIndex(index);
                                        }}
                                        disabled={!ticketType.seated}
                                    >
                                        Seats
                                    </button>
                                </td>
                                <td className="py-3 text-center">
                                    <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full sm:w-auto sm:ml-4" onClick={() => handleRemoveTicketType(index)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

            <Popup
                open={isOpen}
                onClose={closePopup}
                modal
                closeOnDocumentClick
                contentStyle={{ padding: "0rem", borderRadius: "20px", width: "fit-content", maxWidth: "95%", maxHeight: "95%", overflow: "auto" }}
                className="center-popup  "
            >
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "-28px" }}>
                    <button className="m-3 bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-2 rounded-full"
                        onClick={togglePopup}
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                {ticketTypes.length > 0 && (
                    <SeatsMap
                        _seats={ticketTypes[index].seats}
                        _index={index}
                        _setSeats={handleSeatsSet}
                        _togglePopUp={togglePopup}
                    />
                )}
            </Popup>

            <div>
                <button type="submit" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full  sm:w-auto sm:ml-4"  >
                    Update Event
                </button>
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

export default UpdateEventForm;

