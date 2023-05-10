import React, { useEffect, useState } from "react";
import { FaChair, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const SeatsMap = ({_seats, _setSeats ,_index}) => {
  const [seats, setSeats] = useState(_seats);
  const [numRows, setNumRows] = useState();
  const [numCols, setNumCols] = useState();

  useEffect(() => {
    countRowsAndCols();
    console.log(typeof _index);
  }, [_index]);

  const handleSeatSelection = (row, col) => {
    const rowSeats = [...seats[row]];
    rowSeats[col] = rowSeats[col] === 0 ? 1 : 0;
    setSeats({ ...seats, [row]: rowSeats });
  };

  const handleNumRowsChange = (event) => {
    const newNumRows = parseInt(event.target.value);
    setNumRows(newNumRows);
    setSeats((prevSeats) => {
      const newSeats = { ...prevSeats };
      const lastRow = String.fromCharCode(65 + newNumRows - 1);
      for (let i = numRows; i < newNumRows; i++) {
        newSeats[String.fromCharCode(65 + i)] = Array(numCols).fill(0);
      }
      for (let i = newNumRows; i < numRows; i++) {
        delete newSeats[String.fromCharCode(65 + i)];
      }
      return newSeats;
    });
  };

  const handleNumColsChange = (event) => {
    const newNumCols = parseInt(event.target.value);
    setNumCols(newNumCols);
    setSeats((prevSeats) => {
      const newSeats = { ...prevSeats };
      Object.keys(newSeats).forEach((row) => {
        const rowSeats = [...newSeats[row]];
        rowSeats.length = newNumCols;
        rowSeats.fill(0, numCols);
        newSeats[row] = rowSeats;
      });
      return newSeats;
    });
  };

  const countRowsAndCols = () => {
    setNumRows(Object.keys(seats).length);
    setNumCols(seats[Object.keys(seats)[0]].length);
  };

  const countSeatsWithValue_0 = () => {
    let count = 0;
    Object.keys(seats).forEach((row) => {
      seats[row].forEach((seat) => {
        if (seat === 0) {
          count++;
        }
      });
    });
    return count;
  };

  const handleSaveSeats = () => {
    _setSeats(_index, seats, countSeatsWithValue_0());
  };

  if (seats != null) {

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
                        className={`px-4 py-2 cursor-pointer ${seat === 0 ? "bg-green-500" : "bg-gray-500"
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
        <button className="px-6 py-2 mt-3 bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-white rounded focus:outline-none"  >
          Print To console
        </button>
      </div>
    );
  }
};

export default SeatsMap;
