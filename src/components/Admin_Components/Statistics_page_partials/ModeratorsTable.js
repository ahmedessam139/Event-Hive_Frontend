import { useState } from 'react';
import { FaTimes,FaPlus } from "react-icons/fa";

const ModeratorsTable = () => {
  const [moderators, setModerators] = useState([
    { id: 1, username: 'john_doe', name: 'John Doe', gender: 'Male' },
    { id: 2, username: 'jane_smith', name: 'Jane Smith', gender: 'Female' },
    { id: 3, username: 'alex_wong', name: 'Alex Wong', gender: 'Male' },
  ]);

  const handleRemoveAttendee = (id) => {
    setModerators(moderators.filter((moderator) => moderator.id !== id));
  };

  return (
    <div className="bg-white p-4 m-2 md:m-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <p className="mb-2 text-3xl text-gray-500">Moderators</p>
        <button
          className="bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-4 rounded-full"
        >
          Add One <FaPlus className="inline-block " />
        </button>
      </div>
      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Username</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Gender</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {moderators.map((moderator) => (
              <tr key={moderator.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-center">{moderator.username}</td>
                <td className="py-3 px-6 text-center">{moderator.name}</td>
                <td className="py-3 px-6 text-center">{moderator.gender}</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleRemoveAttendee(moderator.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModeratorsTable;
