import React, { useState } from "react";

const Modal = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative p-4 bg-white dark:bg-gray-800 max-w-screen-md w-full rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-black dark:text-gray-100 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={member.imgSrc}
          alt={member.title}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-[#384f4b] dark:text-gray-100">
            {member.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{member.category}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState("*");
  const [selectedMember, setSelectedMember] = useState(null);

  const items = [
    { imgSrc: "/assets/bangalore/banglore1.webp", category: "Bangalore", title: "Bangalore Event", filters: "bangalore" },
    { imgSrc: "/assets/mumbai/Mumbai01.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
    { imgSrc: "/assets/chennai/chennai1.webp", category: "Chennai", title: "Chennai Event", filters: "chennai" },
    { imgSrc: "/assets/bangalore/banglore2.webp", category: "Bangalore", title: "Bangalore Event", filters: "bangalore" },
    { imgSrc: "/assets/mumbai/Mumbai2.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
    { imgSrc: "/assets/chennai/chennai2.webp", category: "Chennai", title: "Chennai Event", filters: "chennai" },
    { imgSrc: "/assets/bangalore/banglore3.webp", category: "Bangalore", title: "Bangalore Event", filters: "bangalore" },
    { imgSrc: "/assets/chennai/chennai3.webp", category: "Chennai", title: "Chennai Event", filters: "chennai" },
    { imgSrc: "/assets/mumbai/Mumbai3.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
    { imgSrc: "/assets/bangalore/banglore4.webp", category: "Bangalore", title: "Bangalore Event", filters: "bangalore" },
    { imgSrc: "/assets/chennai/chennai4.webp", category: "Chennai", title: "Chennai Event", filters: "chennai" },
    { imgSrc: "/assets/mumbai/Mumbai4.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
    { imgSrc: "/assets/mumbai/Mumbai5.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
    { imgSrc: "/assets/mumbai/Mumbai6.webp", category: "Mumbai", title: "Mumbai Event", filters: "mumbai" },
  ];

  return (
    <section
  id="gallery"
  className="w-full px-4 py-8 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-100 font-roboto transition-colors duration-300"
>
    <div className="w-full max-w-screen-xl mx-auto">
      {/* Gallery Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-gray-100 font-inter mb-4">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
      </div>
  
      {/* Filter Section */}
      <div className="text-center mb-8">
        <ul className="flex justify-center space-x-8 text-sm uppercase font-normal">
          {["*", "mumbai", "bangalore", "chennai"].map((city) => (
            <li key={city}>
              <button
                className={`${
                  filter === city
                    ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                    : "text-gray-500 dark:text-gray-400"
                } hover:text-blue-600 dark:hover:text-blue-400`}
                onClick={() => setFilter(city)}
              >
                {city === "*" ? "All" : city.charAt(0).toUpperCase() + city.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items
          .filter((item) => filter === "*" || item.filters.includes(filter))
          .map((item, index) => (
            <div key={index} className="relative group p-4 cursor-pointer">
              <div className="overflow-hidden" onClick={() => setSelectedMember(item)}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg" // Added rounded-lg for border radius
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-90 transition-all duration-300 flex justify-center items-center">
                  <div className="text-center">
                    <h6 className="text-[#384f4b] dark:text-gray-100 font-inter mt-1">
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
  
      {/* Modal */}
      {selectedMember && (
        <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  </section>
  
  
  );
};

export default Gallery;
