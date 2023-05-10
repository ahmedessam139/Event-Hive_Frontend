import React, { useEffect, useState } from "react";
import { FaChair, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const SeatsMap = () => {
  const [numRows, setNumRows] = useState(6);
  const [numCols, setNumCols] = useState(9);

  const [seats, setSeats] = useState(
    Array.from({ length: numRows }, () => Array(numCols).fill(0))
  );

  useEffect(() => {
    console.log(seats);
  })

  const handleSeatSelection = (row, col) => {
    setSeats(prevSeats => {
      const newSeats = [...prevSeats];
      newSeats[row][col] = prevSeats[row][col] === 0 ? 3 : 0;
      return newSeats;
    });
  };

  const handleNumRowsChange = (event) => {
    const newNumRows = parseInt(event.target.value, 10);
    setNumRows(newNumRows);
    setSeats(prevSeats => {
      const newSeats = Array.from({ length: newNumRows }, () => Array(numCols).fill(0));
      for (let i = 0; i < newNumRows && i < prevSeats.length; i++) {
        for (let j = 0; j < numCols && j < prevSeats[i].length; j++) {
          newSeats[i][j] = prevSeats[i][j];
        }
      }
      return newSeats;
    });
  };

  const handleNumColsChange = (event) => {
    const newNumCols = parseInt(event.target.value, 10);
    setNumCols(newNumCols);
    setSeats(prevSeats => {
      const newSeats = Array.from({ length: numRows }, () => Array(newNumCols).fill(0));
      for (let i = 0; i < numRows && i < prevSeats.length; i++) {
        for (let j = 0; j < newNumCols && j < prevSeats[i].length; j++) {
          newSeats[i][j] = prevSeats[i][j];
        }
      }
      return newSeats;
    });
  };

  return (
    <div className="bg-gray-100 p-8 m-5 rounded-lg md:w-[95%] flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Seats</h2>
      <div className="flex flex-row mb-4">
        <label htmlFor="numRows" className="mr-4">
          Rows:
        </label>
        <input
          type="number"
          id="numRows"
          value={numRows}
          onChange={handleNumRowsChange}
          className="border border-gray-500 p-2 rounded-lg mr-2"
        />
        <label htmlFor="numCols" className="mr-4">
          Columns:
        </label>
        <input
          type="number"
          id="numCols"
          value={numCols}
          onChange={handleNumColsChange}
          className="border border-gray-500 p-2 rounded-lg"
        />
      </div>
      <div className="overflow-auto max-w-full max-h-[500px] inline-block">
        <table className="border-collapse min-w-10 inline-block">
          <tbody>
            {Object.keys(seats).map((row) => (
              <tr key={row}>
                {seats[row].map((seat, index) => (
                  <td key={`${row}-${index}`} className="w-15">
                    <div
                      className={`px-4 py-2 cursor-pointer ${
                        seat === 0 ? "bg-green-500" : "bg-gray-500"
                      } ${seat === 3 ? "bg-gray-500" : ""} rounded-lg mr-2 mb-2 w-16 h-15`}
                      onClick={() => handleSeatSelection(row, index)}
                    >
                      <FaChair className="text-white" />
                      {row}
                      {index}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatsMap;
                                                    