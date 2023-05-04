import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const partnersData = [
    { name: "Aisec Zagazig", imgUrl: "https://images.squarespace-cdn.com/content/v1/5913379febbd1a6fb635dafc/1507713055962-Q84KPMEWRAPV0MGUPVBI/AIESEC+Favicon+%281%29.png?format=500w" },
    { name: "Partner 2", imgUrl: "https://picsum.photos/200/300" },
    { name: "Partner 3", imgUrl: "https://picsum.photos/200/300" },
    { name: "Partner 4", imgUrl: "https://picsum.photos/200/300" },
    { name: "Partner 5", imgUrl: "https://picsum.photos/200/300" }
];

const Partners = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollWidth - scrollLeft > clientWidth);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="bg-white p-8 m-8 mt-3 rounded-lg shadow-md w-full md:w-[95%] ">
      <div className="relative">
        <div
          className="flex justify-start items-center gap-9 overflow-x-auto whitespace-nowrap"
          ref={containerRef}
          style={{ scrollBehavior: "smooth" , scrollbarWidth: "none"}}
          onScroll={handleScroll}
        >
          {partnersData.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div class="w-20 h-20 overflow-hidden">
                <img
                  src={partner.imgUrl}
                  alt={partner.name}
                  className="rounded-full mb-2object-cover w-full h-full"
                />
              </div>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={() => (containerRef.current.scrollLeft -= 200)}
          >
            <FaArrowLeft />
          </button>
        )}
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={() => (containerRef.current.scrollLeft += 200)}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};


export default Partners;
